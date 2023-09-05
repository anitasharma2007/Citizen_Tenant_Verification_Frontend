import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgePanelComponent } from './age-panel.component';

describe('AgePanelComponent', () => {
  let component: AgePanelComponent;
  let fixture: ComponentFixture<AgePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
