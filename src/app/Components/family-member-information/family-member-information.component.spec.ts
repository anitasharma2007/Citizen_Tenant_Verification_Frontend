import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberInformationComponent } from './family-member-information.component';

describe('FamilyMemberInformationComponent', () => {
  let component: FamilyMemberInformationComponent;
  let fixture: ComponentFixture<FamilyMemberInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMemberInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyMemberInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
