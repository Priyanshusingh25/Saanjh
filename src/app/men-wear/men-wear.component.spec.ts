import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWearComponent } from './men-wear.component';

describe('MenWearComponent', () => {
  let component: MenWearComponent;
  let fixture: ComponentFixture<MenWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenWearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
