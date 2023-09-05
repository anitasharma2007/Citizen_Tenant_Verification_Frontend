import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentDate : Date;
  formattedDate : string;
  formattedTime : string;

  constructor(private datePipe : DatePipe) {
    this.currentDate = new Date();
    this.formattedDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy')!;
    this.formattedTime = this.datePipe.transform(this.currentDate , 'HH:mm')!;
  }

    name = "Anita";

}
