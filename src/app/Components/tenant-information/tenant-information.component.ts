import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterDataFetchService } from 'src/app/Services/master-data-fetch.service';

@Component({
  selector: 'app-tenant-information',
  templateUrl: './tenant-information.component.html',
  styleUrls: ['./tenant-information.component.css']
})
export class TenantInformationComponent implements OnInit {

  @Input()
  tenantInfoForm!: FormGroup; // Define the input property
  personalInfoForm!: FormGroup;
  presentAddressForm!: FormGroup;
  previousAddressForm!: FormGroup;
  permanentAddressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    //Define personal information form controls here
    this.personalInfoForm = this.formBuilder.group({
      uidNum: [''],
      fName: [''],
      mobile: [''],
      middleName: [''],
      landline: [''],
      lName: [''],
      relationType: [''],
      relativeName: [''],
      occupation: [''],
      purposeofTenancy: [''],
      gender: ['']
    })

    //Define present address form controls here
    this.presentAddressForm = this.formBuilder.group({
      houseNo: [''],
      country: [''],
      streeName: [''],
      state: [''],
      colony: [''],
      district: [''],
      village: [''],
      policeStation: [''],
      pincode: ['']
    })

    //Define previous information form controls here
    this.previousAddressForm = this.formBuilder.group({
      houseNo: [''],
      country: [''],
      streeName: [''],
      state: [''],
      colony: [''],
      district: [''],
      village: [''],
      policeStation: [''],
      pincode: [''],
      dateOfOccupancy: [''],
      dateOfLeaving: ['']
    })

    //Define permanent information form controls here
    this.permanentAddressForm = this.formBuilder.group({
      houseNo: [''],
      country: [''],
      streeName: [''],
      state: [''],
      colony: [''],
      district: [''],
      village: [''],
      policeStation: [''],
      pincode: ['']
    })
  }

  // Implement methods to clear address forms
  clearPresentAddress() {
    this.presentAddressForm.reset();
  }

  clearPreviousAddress() {
    this.previousAddressForm.reset();
  }

  clearPermanentAddress() {
    this.permanentAddressForm.reset();
  }
}
