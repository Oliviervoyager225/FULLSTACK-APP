package com.example.app.service;

import com.example.app.dto.AdmissionRequest;
import com.example.app.dto.AdmissionResponse;
import java.util.List;

public interface AdmissionService {
    AdmissionResponse createAdmission(AdmissionRequest request);
    List<AdmissionResponse> getAllAdmissions();
}
