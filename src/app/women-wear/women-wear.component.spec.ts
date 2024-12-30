import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWearComponent } from './women-wear.component';

describe('WomenWearComponent', () => {
  let component: WomenWearComponent;
  let fixture: ComponentFixture<WomenWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenWearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
