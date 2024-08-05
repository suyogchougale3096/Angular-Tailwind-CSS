import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepfeatureComponent } from './stepfeature.component';

describe('StepfeatureComponent', () => {
  let component: StepfeatureComponent;
  let fixture: ComponentFixture<StepfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
