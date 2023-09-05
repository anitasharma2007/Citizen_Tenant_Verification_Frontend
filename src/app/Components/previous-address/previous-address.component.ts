import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterDataFetchService } from 'src/app/Services/master-data-fetch.service';

@Component({
  selector: 'app-previous-address',
  templateUrl: './previous-address.component.html',
  styleUrls: ['./previous-address.component.css']
})
export class PreviousAddressComponent {

  @Input()
  addressForm!: FormGroup; // Define the input property
  nationality: any[] = [];
  selectednationalityCode = 80;
  state: any[] = [];
  langCd = 99;
  selectedState!: number;
  district: any[] = [];
  selectedDistrict!: number;
  policeStation : any[] = [];
  constructor(private masterDataService: MasterDataFetchService) {

  }
  ngOnInit(): void {
    this.fetchNationality();
    this.fetchState();
  }

  //master service call to fetch Nationality 
  fetchNationality() {
    this.masterDataService.fetchNationality().subscribe(data => {
      this.nationality = data;
    })
  }

  //master service call to fetch State
  fetchState() {
    this.masterDataService.fetchState().subscribe(data => {
      this.state = data;
    })
  }

  //master service call to fetch all districts
  fetchDistrict() {
    this.masterDataService.fetchDistrict(this.langCd, this.selectedState).subscribe(data => {
      this.district = data;
      console.log("district list = " + data);
    })
  }

  //fetch district on the basis of selected state
  onSelectedState(event) {
    this.selectedState = event.target.value;
    this.fetchDistrict();
    console.log("Selected state : " + this.selectedState)
  }

  //master service call to fetch all police stations
  fetchPoliceStation(){
    this.masterDataService.fetchPoliceStation(this.langCd, this.selectedState, this.selectedDistrict).subscribe(data => {
      this.policeStation=data;
      console.log(this.policeStation);
    })
  }

  //fetch district on the basis of selected state
  onSelectedDistrict(event) {
    this.selectedDistrict = event.target.value;
    this.fetchPoliceStation();
  }

}
