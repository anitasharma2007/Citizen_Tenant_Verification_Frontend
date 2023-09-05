import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTenantPGVerificationDetailComponent } from './Components/add-tenant-pgverification-detail/add-tenant-pgverification-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, DatePipe} from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'; // Import the MatTabsModule
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { OwnerInformationComponent } from './Components/owner-information/owner-information.component';
import { TenantInformationComponent } from './Components/tenant-information/tenant-information.component';
import { FamilyMemberInformationComponent } from './Components/family-member-information/family-member-information.component';
import { AffidavitComponent } from './Components/affidavit/affidavit.component';
import { PresentPermanentAddressComponent } from './Components/present-permanent-address/present-permanent-address.component';
import { PreviousAddressComponent } from './Components/previous-address/previous-address.component';
import { AgePanelComponent } from './Components/age-panel/age-panel.component';
import { EFormFileUploadComponent } from './Components/eform-file-upload/eform-file-upload.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalinformationComponent } from './Components/personalinformation/personalinformation.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTenantPGVerificationDetailComponent,
    HeaderComponent,
    OwnerInformationComponent,
    TenantInformationComponent,
    FamilyMemberInformationComponent,
    AffidavitComponent,
    PresentPermanentAddressComponent,
    PreviousAddressComponent,
    AgePanelComponent,
    EFormFileUploadComponent,
    FileUploadComponent,
    PersonalinformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:  [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
