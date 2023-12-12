import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofficeComponent } from './headoffice.component';

describe('HeadofficeComponent', () => {
  let component: HeadofficeComponent;
  let fixture: ComponentFixture<HeadofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadofficeComponent]
    });
    fixture = TestBed.createComponent(HeadofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
