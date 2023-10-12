import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleMapsComponent } from './bubble-maps.component';

describe('BubbleMapsComponent', () => {
  let component: BubbleMapsComponent;
  let fixture: ComponentFixture<BubbleMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleMapsComponent]
    });
    fixture = TestBed.createComponent(BubbleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
