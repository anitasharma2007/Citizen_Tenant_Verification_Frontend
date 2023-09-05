import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personinfo } from 'src/app/Classes/personinfo';
import { MasterDataFetchService } from 'src/app/Services/master-data-fetch.service';

@Component({
  selector: 'app-owner-information',
  templateUrl: './owner-information.component.html',
  styleUrls: ['./owner-information.component.css']
})
export class OwnerInformationComponent implements OnInit {

  occupations: any[] = [];
  //personinfo : Personinfo = new Personinfo();
  @Input()
  ownerInfoForm!: FormGroup; // Receive the form group as input

  constructor(private masterDataService: MasterDataFetchService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.fetchOccupation();

    // Create the form controls for owner information
    this.ownerInfoForm=this.formBuilder.group({
      uidNum : [''],
      firstName : [''],
      email : [''],
      middleName : [''],
      mobile : [''],
      lastName : [''],
      telephone : [''],
      occupation : [''],
    })
  }

  //master service call to fetch State
  fetchOccupation() {
    this.masterDataService.fetchOccupation().subscribe(data => {
      this.occupations = data;
      console.log(this.occupations);
    })
  }

  //clear all input fields
  clearInputs(){
    this.ownerInfoForm.reset();
  }

}
