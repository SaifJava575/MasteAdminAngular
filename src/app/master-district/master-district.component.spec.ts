import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDistrictComponent } from './master-district.component';

describe('MasterDistrictComponent', () => {
  let component: MasterDistrictComponent;
  let fixture: ComponentFixture<MasterDistrictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDistrictComponent]
    });
    fixture = TestBed.createComponent(MasterDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
