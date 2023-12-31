import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantInformationComponent } from './tenant-information.component';

describe('TenantInformationComponent', () => {
  let component: TenantInformationComponent;
  let fixture: ComponentFixture<TenantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
