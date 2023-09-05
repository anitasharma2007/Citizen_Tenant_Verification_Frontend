import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormFileUploadComponent } from './eform-file-upload.component';

describe('EFormFileUploadComponent', () => {
  let component: EFormFileUploadComponent;
  let fixture: ComponentFixture<EFormFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFormFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFormFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
