import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerInformationComponent } from './owner-information.component';

describe('OwnerInformationComponent', () => {
  let component: OwnerInformationComponent;
  let fixture: ComponentFixture<OwnerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
