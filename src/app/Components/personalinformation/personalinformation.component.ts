import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MasterDataFetchService } from 'src/app/Services/master-data-fetch.service';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit{

  @Input()
  personalInfoForm!: FormGroup; // Define the input property
  occupations: any[] = [];
  gender : any[] = [];
  relationType : any[] = [];
  identityMarks: any = [];
  eyeType: any = [];
  bodyBuildType: any = [];
  hairType: any = [];
  bodyComplexionType: any = [];
  languageDialect: any = [];
  selectedLanguageDialect:any=-1;
  selectedBodyBuildType: any = -1;
  selectedHairType: any = -1;
  selectedBodyComplexionType: any = -1;
  selectedGender: any = -1;
  selectedEyeType: any = -1;
  selectedIdentityMarks: any = -1;
  physicalFeartureCode: any = [1, 2, 13, 23];


  constructor(private masterDataService: MasterDataFetchService,
    private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.fetchOccupation();
    this.fetchGender();
    this.fetchRelationType();

    // Create the form controls for owner information
    this.personalInfoForm.addControl('uidNum', this.formBuilder.control(''));
    this.personalInfoForm.addControl('fName', this.formBuilder.control(''));
    this.personalInfoForm.addControl('mobile', this.formBuilder.control(''));
    this.personalInfoForm.addControl('middleName', this.formBuilder.control(''));
    this.personalInfoForm.addControl('landline', this.formBuilder.control(''));
    this.personalInfoForm.addControl('lName', this.formBuilder.control(''));
    this.personalInfoForm.addControl('relationType', this.formBuilder.control(''));
    this.personalInfoForm.addControl('occupation', this.formBuilder.control(''));
    this.personalInfoForm.addControl('relativeName', this.formBuilder.control(''));
    this.personalInfoForm.addControl('purposeofTenancy', this.formBuilder.control(''));
    this.personalInfoForm.addControl('gender', this.formBuilder.control(''));
  }

  //master service call to fetch State
  fetchOccupation() {
    this.masterDataService.fetchOccupation().subscribe(data => {
      this.occupations = data;
      console.log(this.occupations);
    })
  }

  //master service call to fetch gender
  fetchGender(){
    this.masterDataService.fetchGender().subscribe(data => {
      this.gender=data;
    })
  }

  //master service call to fetch relationType
  fetchRelationType(){
    this.masterDataService.fetchRelationType().subscribe(data => {
      this.relationType=data;
    })
  }

}
