import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tenant-pgverification-detail',
  templateUrl: './add-tenant-pgverification-detail.component.html',
  styleUrls: ['./add-tenant-pgverification-detail.component.css']
})
export class AddTenantPGVerificationDetailComponent implements OnInit{
  tenantVerificationFormBuilder!: FormGroup;
  ownerInfoForm!: FormGroup;
  tenantInfoForm!: FormGroup;
  familyInfoForm!: FormGroup;
  affidavitForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
     // Create form controls and form groups for each tab
     this.ownerInfoForm = this.createOwnerInfoForm();
     this.tenantInfoForm = this.createTenantInfoForm();
     this.familyInfoForm = this.createFamilyInfoForm();
     this.affidavitForm = this.createAffidavitForm();
 
     // Create the main form group
     this.tenantVerificationFormBuilder = this.formBuilder.group({
       ownerInfo: this.ownerInfoForm,
       tenantInfo: this.tenantInfoForm,
       familyInfo: this.familyInfoForm,
       affidavit: this.affidavitForm,
     });
  }

  ngOnInit(): void {
    // this.tenantVerificationFormBuilder = this.formBuilder.group({
    //   // Initialize your form controls here
    //   stateCd: ['19'],
    //   districtCd: ['19393'],
    //   psCd: ['1393039'],
    //   srYear: ['2023'],
    //   runSrno: [''],
    //   requestingAgencyName: [''],
    //   requestingAgencyEmail: [null],
    //   applicantNum: [''],
    //   applicationDt: [''],
    //   employeePerson: this.formBuilder.group({
    //     langCd: ['99'],
    //     stateCd: ['13'],
    //     districtCd: ['13930'],
    //     psId: ['1393039'],
    //     regYear: ['2023'],
    //     buildType: ['select'],
    //     personTypeCd: [''],
    //     firstName: [''],
    //     middleName:[''],
    //     lastName:[''],
    //     hairType:['select'],
    //     complexionType:['select'],
    //     othIdentityMarks:['select'],
    //     eyeType : ['select'],
    //     gender:['select'],
    //     languagesKnwon:['select'],
    //     placeOfBirth:[''],
    //     height:[''],
    //     uidNum:[''],
    //     age:[''],
    //     ageFromYrs:[''],
    //     ageToYrs:[''],
    //     ageMonths:[''],
    //     yob:[''],
    //     dob:[''],
    //     previousAddr: this.formBuilder.group({
    //       addrType: [''],
    //       addressLine1: ['previous'],
    //       addressLine2: [''],
    //       addressLine3: [''],
    //       village: [''],
    //       tehsil: [''],
    //       countryCd: [''],
    //       stateCd: [''],
    //       districtCd: [''],
    //       psCd: ['select'],
    //       pincode: [''],
    //       mobile: [''],
    //       telephone: [''],
    //       stayDuration: [''],
    //       stayToDt: [''],
    //       addressType: ['']
    //     }),
    //     permanentAddr: this.formBuilder.group({
    //       addrType: [''],
    //       addressLine1: ['permanent'],
    //       addressLine2: [''],
    //       addressLine3: [''],
    //       village: [''],
    //       tehsil: [''],
    //       countryCd: [''],
    //       stateCd: [''],
    //       districtCd: [''],
    //       psCd: ['select'],
    //       pincode: [''],
    //       mobile: [''],
    //       telephone: [''],
    //       stayDuration: [''],
    //       stayToDt: [''],
    //       addressType: ['']
    //     }),
    //     presentAddr: this.formBuilder.group({
    //       addrType: [''],
    //       addressLine1: new FormControl(''),
    //       addressLine2: ['present'],
    //       addressLine3: [''],
    //       village: [''],
    //       tehsil: [''],
    //       countryCd: [''],
    //       stateCd: [''],
    //       districtCd: [''],
    //       psCd: ['select'],
    //       pincode: [''],
    //       mobile: [''],
    //       telephone: [''],
    //       stayDuration: [''],
    //       stayToDt: [''],
    //       addressType: ['']
    //     }),
    //     curntEmplyrAddr: this.formBuilder.group({
    //       addrType: [''],
    //       addressLine1: new FormControl(''),
    //       addressLine2: ['current employer'],
    //       addressLine3: [''],
    //       village: [''],
    //       tehsil: [''],
    //       countryCd: [''],
    //       stateCd: [''],
    //       districtCd: [''],
    //       psCd: ['select'],
    //       pincode: [''],
    //       mobile: [''],
    //       telephone: [''],
    //       stayDuration: [''],
    //       stayToDt: [''],
    //       addressType: ['']
    //     }),
    //     prevEmplyrAddr: this.formBuilder.group({
    //       addrType: [''],
    //       addressLine1: new FormControl(''),
    //       addressLine2: ['previous employer'],
    //       addressLine3: [''],
    //       village: [''],
    //       tehsil: [''],
    //       countryCd: [''],
    //       stateCd: [''],
    //       districtCd: [''],
    //       psCd: ['select'],
    //       pincode: [''],
    //       mobile: [''],
    //       telephone: [''],
    //       stayDuration: [''],
    //       stayToDt: [''],
    //       addressType: ['']
    //     }),
    //   }),
    //   prevEmplyrName: [''],
    //   prevEmplyrAddrCd: [''],
    //   prevEmplyrFrmDt: [''],
    //   prevEmplyrToDt: [''],
    //   prevEmplyrRole: [''],
    //   currEmplyrName: [''],
    //   currEmplyrAddrCd: [''],
    //   currEmplyrRole: [''],
    //   addrVerfDocType: [''],
    //   addrVerfDocNum: [''],
    //   addrOthrDocType: [''],
    //   addrOthrDocNum: [''],
    //   isAffadavit: [''],
    //   affadavitDetails: [''],
    //   isEmployeeCriminal: [''],
    //   empCrimeDetail: [''],
    //   requestStatus: [''],
    //   recordStatus: [''],
    //   isLinked: [''],
    //   linkedReqNum: [''],
    //   prevEmplyrMobile: [''],
    //   prevEmplyrLandline: [''],
    //   currEmplyrMobile: [''],
    //   currEmplyrLandline: [''],
    //   recordCreatedOn: [''],
    //   empPresAddrPsCd: [''],
    //   employeeRelative: this.formBuilder.array([])
    // });
  }

  // Define form control creation functions for each tab
  private createOwnerInfoForm(): FormGroup {
    return this.formBuilder.group({
      // Define owner information form controls here
    });
  }

  private createTenantInfoForm(): FormGroup {
    return this.formBuilder.group({
      // Define tenant information form controls here
    });
  }

  private createFamilyInfoForm(): FormGroup {
    return this.formBuilder.group({
      // Define family member information form controls here
    });
  }

  private createAffidavitForm(): FormGroup {
    return this.formBuilder.group({
      // Define affidavit form controls here
    });
  }
    
  onSubmit(){
    
  }

  saveForm() {
    // Handle form save action here
  }

  closeForm() {
    // Handle form close action here
  }
}
