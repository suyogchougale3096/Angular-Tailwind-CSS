import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyinfosliderComponent } from './companyinfoslider.component';

describe('CompanyinfosliderComponent', () => {
  let component: CompanyinfosliderComponent;
  let fixture: ComponentFixture<CompanyinfosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyinfosliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyinfosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
