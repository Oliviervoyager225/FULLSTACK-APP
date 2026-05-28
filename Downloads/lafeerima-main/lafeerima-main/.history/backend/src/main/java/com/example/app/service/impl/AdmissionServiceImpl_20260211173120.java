package com.example.app.service.impl;

import com.example.app.dto.AdmissionRequest;
import com.example.app.dto.AdmissionResponse;
import com.example.app.entity.Admission;
import com.example.app.repository.AdmissionRepository;
import com.example.app.service.AdmissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdmissionServiceImpl implements AdmissionService {

    private final AdmissionRepository admissionRepository;

    @Override
    public AdmissionResponse createAdmission(AdmissionRequest request) {
        Admission admission = new Admission();
        admission.setApplicantRoleBeneficiary(request.isApplicantRoleBeneficiary());
        admission.setApplicantRoleParent(request.isApplicantRoleParent());
        admission.setBeneficiaryName(request.getBeneficiaryName());
        admission.setBeneficiaryBirthDate(request.getBeneficiaryBirthDate());
        admission.setBeneficiaryNationality(request.getBeneficiaryNationality());
        admission.setBeneficiaryGender(request.getBeneficiaryGender());
        admission.setBeneficiaryPhone(request.getBeneficiaryPhone());
        admission.setBeneficiaryEmail(request.getBeneficiaryEmail());
        admission.setBeneficiaryStatus(request.getBeneficiaryStatus());
        admission.setBeneficiarySchool(request.getBeneficiarySchool());
        admission.setAppointmentWith(joinAppointments(request.getAppointmentWith()));
        admission.setAppointmentOther(request.getAppointmentOther());
        admission.setAppointmentDate(request.getAppointmentDate());
        admission.setReferralSource(request.getReferralSource());
        admission.setFatherName(request.getFatherName());
        admission.setFatherAddress(request.getFatherAddress());
        admission.setFatherProfession(request.getFatherProfession());
        admission.setFatherPhone(request.getFatherPhone());
        admission.setFatherEmail(request.getFatherEmail());
        admission.setMotherName(request.getMotherName());
        admission.setMotherAddress(request.getMotherAddress());
        admission.setMotherProfession(request.getMotherProfession());
        admission.setMotherPhone(request.getMotherPhone());
        admission.setMotherEmail(request.getMotherEmail());
        admission.setGuardianName(request.getGuardianName());
        admission.setGuardianAddress(request.getGuardianAddress());
        admission.setGuardianProfession(request.getGuardianProfession());
        admission.setGuardianPhone(request.getGuardianPhone());
        admission.setGuardianEmail(request.getGuardianEmail());
        admission.setContactName(request.getContactName());
        admission.setContactAddress(request.getContactAddress());
        admission.setContactProfession(request.getContactProfession());
        admission.setContactPhone(request.getContactPhone());
        admission.setContactEmail(request.getContactEmail());
        admission.setConsentAccuracy(request.isConsentAccuracy());
        admission.setConsentUsage(request.isConsentUsage());
        admission.setSignatureDate(request.getSignatureDate());
        admission.setSignatureName(request.getSignatureName());

        Admission saved = admissionRepository.save(admission);
        return AdmissionResponse.builder()
                .id(saved.getId())
                .beneficiaryName(saved.getBeneficiaryName())
                .createdAt(saved.getCreatedAt())
                .build();
    }

    @Override
    public List<AdmissionResponse> getAllAdmissions() {
        return admissionRepository.findAll()
                .stream()
                .map(admission -> AdmissionResponse.builder()
                        .id(admission.getId())
                        .beneficiaryName(admission.getBeneficiaryName())
                        .createdAt(admission.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }

    private String joinAppointments(List<String> appointments) {
        if (appointments == null || appointments.isEmpty()) {
            return null;
        }
        List<String> cleaned = appointments.stream()
                .map(String::trim)
                .filter(value -> !value.isEmpty())
                .collect(Collectors.toList());
        return cleaned.isEmpty() ? null : String.join(", ", cleaned);
    }
}
