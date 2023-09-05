import { DatePipe } from '@angular/common';
import { Component , Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MasterDataFetchService } from 'src/app/Services/master-data-fetch.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-family-member-information',
  templateUrl: './family-member-information.component.html',
  styleUrls: ['./family-member-information.component.css']
})
export class FamilyMemberInformationComponent implements OnInit {

  @Input() familyInfoForm !: FormGroup
  constructor(private datePipe : DatePipe,
    private router: Router,
    private dialog: MatDialog,
    private formBuilder : FormBuilder,
    private masterDataService: MasterDataFetchService) {
    this.currentDate = new Date();
    this.formattedDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy')!;
  }

  ngOnInit(): void {
    this.fetchRelationType();
    this.fetchNationalIdDocType();
    this.familyInfoForm=this.formBuilder.group({
      uidNum : [''],
      fName : [''],
      landline : [''],
      middleName : [''],
      mobile : [''],
      lName : [''],
      anyOther : [''],
      addressVerificationDocument : [''],
      documentNumber : [''],
      relationWithTenant : ['']
    })
  }

  currentDate : Date;
  formattedDate : string;
  relationType : any[] = [];
  nationalIdDocType : any[] = [];

  

  fileUploadTab(){
    //this.router.navigate(['/fileUploadTab']);
    this.dialog.open(FileUploadComponent, {

    });
  }

  //master service call to fetch relationType
  fetchRelationType(){
    this.masterDataService.fetchRelationType().subscribe(data => {
      this.relationType=data;
    })
  }

  //master service call to fetch national id doc type
  fetchNationalIdDocType(){
    this.masterDataService.fetchNationalIdDocType().subscribe(data => {
      this.nationalIdDocType=data;
    })
  }

}
