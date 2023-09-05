import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPermanentAddressComponent } from './present-permanent-address.component';

describe('PresentPermanentAddressComponent', () => {
  let component: PresentPermanentAddressComponent;
  let fixture: ComponentFixture<PresentPermanentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentPermanentAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentPermanentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
