import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePopUpComponent } from './cookie-pop-up.component';

describe('CookiePopUpComponent', () => {
  let component: CookiePopUpComponent;
  let fixture: ComponentFixture<CookiePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiePopUpComponent]
    });
    fixture = TestBed.createComponent(CookiePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
