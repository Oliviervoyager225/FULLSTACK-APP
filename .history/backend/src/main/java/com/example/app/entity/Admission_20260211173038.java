package com.example.app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "admissions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean applicantRoleBeneficiary;
    private boolean applicantRoleParent;

    @Column(nullable = false, length = 160)
    private String beneficiaryName;

    private LocalDate beneficiaryBirthDate;

    @Column(length = 80)
    private String beneficiaryNationality;

    @Column(length = 20)
    private String beneficiaryGender;

    @Column(length = 50)
    private String beneficiaryPhone;

    @Column(length = 120)
    private String beneficiaryEmail;

    @Column(length = 160)
    private String beneficiaryStatus;

    @Column(length = 160)
    private String beneficiarySchool;

    @Column(length = 300)
    private String appointmentWith;

    @Column(length = 160)
    private String appointmentOther;

    private LocalDate appointmentDate;

    @Column(length = 200)
    private String referralSource;

    @Column(length = 160)
    private String fatherName;

    @Column(length = 200)
    private String fatherAddress;

    @Column(length = 120)
    private String fatherProfession;

    @Column(length = 50)
    private String fatherPhone;

    @Column(length = 120)
    private String fatherEmail;

    @Column(length = 160)
    private String motherName;

    @Column(length = 200)
    private String motherAddress;

    @Column(length = 120)
    private String motherProfession;

    @Column(length = 50)
    private String motherPhone;

    @Column(length = 120)
    private String motherEmail;

    @Column(length = 160)
    private String guardianName;

    @Column(length = 200)
    private String guardianAddress;

    @Column(length = 120)
    private String guardianProfession;

    @Column(length = 50)
    private String guardianPhone;

    @Column(length = 120)
    private String guardianEmail;

    @Column(length = 160)
    private String contactName;

    @Column(length = 200)
    private String contactAddress;

    @Column(length = 120)
    private String contactProfession;

    @Column(length = 50)
    private String contactPhone;

    @Column(length = 120)
    private String contactEmail;

    private boolean consentAccuracy;
    private boolean consentUsage;

    private LocalDate signatureDate;

    @Column(length = 160)
    private String signatureName;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
