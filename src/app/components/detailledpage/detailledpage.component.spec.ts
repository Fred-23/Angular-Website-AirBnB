import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledpageComponent } from './detailledpage.component';

describe('DetailledpageComponent', () => {
  let component: DetailledpageComponent;
  let fixture: ComponentFixture<DetailledpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailledpageComponent]
    });
    fixture = TestBed.createComponent(DetailledpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
