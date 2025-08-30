package com.codewithudo.backend.util;

import java.math.BigDecimal;

public class CommissionUtil {
    // Example: 80% to artist, 20% to platform
    public static final BigDecimal ARTIST_SHARE = new BigDecimal("0.80");
    public static final BigDecimal PLATFORM_SHARE = new BigDecimal("0.20");

    public static BigDecimal calculateArtistShare(BigDecimal totalAmount) {
        return totalAmount.multiply(ARTIST_SHARE);
    }

    public static BigDecimal calculatePlatformShare(BigDecimal totalAmount) {
        return totalAmount.multiply(PLATFORM_SHARE);
    }
}
