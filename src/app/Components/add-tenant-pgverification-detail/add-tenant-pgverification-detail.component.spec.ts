import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenantPGVerificationDetailComponent } from './add-tenant-pgverification-detail.component';

describe('AddTenantPGVerificationDetailComponent', () => {
  let component: AddTenantPGVerificationDetailComponent;
  let fixture: ComponentFixture<AddTenantPGVerificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTenantPGVerificationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTenantPGVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
