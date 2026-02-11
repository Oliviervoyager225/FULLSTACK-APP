package com.example.app.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
public class AdmissionRequest {

    private boolean applicantRoleBeneficiary;
    private boolean applicantRoleParent;

    @NotBlank
    private String beneficiaryName;

    @NotNull
    private LocalDate beneficiaryBirthDate;

    private String beneficiaryNationality;
    private String beneficiaryGender;
    private String beneficiaryPhone;
    private String beneficiaryEmail;
    private String beneficiaryStatus;
    private String beneficiarySchool;

    private List<String> appointmentWith;
    private String appointmentOther;
    private LocalDate appointmentDate;
    private String referralSource;

    private String fatherName;
    private String fatherAddress;
    private String fatherProfession;
    private String fatherPhone;
    private String fatherEmail;

    private String motherName;
    private String motherAddress;
    private String motherProfession;
    private String motherPhone;
    private String motherEmail;

    private String guardianName;
    private String guardianAddress;
    private String guardianProfession;
    private String guardianPhone;
    private String guardianEmail;

    private String contactName;
    private String contactAddress;
    private String contactProfession;
    private String contactPhone;
    private String contactEmail;

    @AssertTrue
    private boolean consentAccuracy;

    @AssertTrue
    private boolean consentUsage;

    @NotNull
    private LocalDate signatureDate;

    @NotBlank
    private String signatureName;
}
