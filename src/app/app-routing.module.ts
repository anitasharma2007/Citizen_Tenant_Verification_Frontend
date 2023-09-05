import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTenantPGVerificationDetailComponent } from './Components/add-tenant-pgverification-detail/add-tenant-pgverification-detail.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';

const routes: Routes = [
  {path : "addTenantVerificationDetail" , component : AddTenantPGVerificationDetailComponent},
  { path: '', redirectTo: '/addTenantVerificationDetail', pathMatch: 'full'},
  {path : "fileUploadTab" , component : FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
