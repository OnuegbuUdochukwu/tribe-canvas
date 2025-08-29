package com.codewithudo.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class S3Service {
    private final S3Client s3Client;
    private final String bucketName = "your-s3-bucket-name"; // TODO: move to config

    public S3Service() {
        this.s3Client = S3Client.builder()
                .region(Region.EU_WEST_1) // TODO: set your region
                .credentialsProvider(StaticCredentialsProvider.create(
                        AwsBasicCredentials.create("YOUR_AWS_ACCESS_KEY", "YOUR_AWS_SECRET_KEY")
                ))
                .build();
    }

    public String uploadFile(MultipartFile file) throws IOException {
        String key = UUID.randomUUID() + "_" + file.getOriginalFilename();
        try {
            s3Client.putObject(PutObjectRequest.builder()
                            .bucket(bucketName)
                            .key(key)
                            .contentType(file.getContentType())
                            .build(),
                    software.amazon.awssdk.core.sync.RequestBody.fromBytes(file.getBytes()));
            return s3UrlForKey(key);
        } catch (S3Exception e) {
            throw new IOException("Failed to upload to S3", e);
        }
    }

    private String s3UrlForKey(String key) {
        return String.format("https://%s.s3.amazonaws.com/%s", bucketName, key);
    }
}
