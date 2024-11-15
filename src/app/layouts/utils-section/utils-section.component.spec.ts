import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsSectionComponent } from './utils-section.component';

describe('UtilsSectionComponent', () => {
  let component: UtilsSectionComponent;
  let fixture: ComponentFixture<UtilsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
