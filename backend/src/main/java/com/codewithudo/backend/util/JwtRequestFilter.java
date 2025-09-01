package com.codewithudo.backend.util;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtRequestFilter.class);

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");

        logger.debug("JwtRequestFilter: Authorization header: {}", requestTokenHeader);
        logger.debug("JwtRequestFilter: Request URI: {} Method: {}", request.getRequestURI(), request.getMethod());

        String username = null;
        String jwtToken = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
                logger.debug("JwtRequestFilter: Extracted username from token: {}", username);
            } catch (Exception e) {
                logger.warn("JwtRequestFilter: Exception extracting username from token: {}", e.getMessage());
                // Token is expired or invalid
            }
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            logger.debug("JwtRequestFilter: Loaded user details for {}: {}", username, userDetails != null);
            logger.debug("JwtRequestFilter: User authorities: {}", userDetails.getAuthorities());

            if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
                logger.debug("JwtRequestFilter: Token validated for user {}", username);
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            } else {
                logger.warn("JwtRequestFilter: Token validation failed for user {}", username);
            }
        }
        if (username == null) {
            logger.warn("JwtRequestFilter: No username extracted from token, or token missing.");
        }
        chain.doFilter(request, response);
        logger.debug("JwtRequestFilter: Response status after filter: {}", response.getStatus());
    }
}