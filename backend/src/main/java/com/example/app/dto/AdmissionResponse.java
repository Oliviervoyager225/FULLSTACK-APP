package com.example.app.dto;

import lombok.Builder;
import lombok.Value;
import java.time.LocalDateTime;

@Value
@Builder
public class AdmissionResponse {
    Long id;
    String beneficiaryName;
    LocalDateTime createdAt;
}
