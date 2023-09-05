import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-affidavit',
  templateUrl: './affidavit.component.html',
  styleUrls: ['./affidavit.component.css']
})
export class AffidavitComponent implements OnInit{

  @Input()
  affidavitForm!: FormGroup; // Define the input property

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
