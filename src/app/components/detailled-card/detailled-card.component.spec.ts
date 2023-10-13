import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledCardComponent } from './detailled-card.component';

describe('DetailledCardComponent', () => {
  let component: DetailledCardComponent;
  let fixture: ComponentFixture<DetailledCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailledCardComponent]
    });
    fixture = TestBed.createComponent(DetailledCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
