import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDesignationComponent } from './master-designation.component';

describe('MasterDesignationComponent', () => {
  let component: MasterDesignationComponent;
  let fixture: ComponentFixture<MasterDesignationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDesignationComponent]
    });
    fixture = TestBed.createComponent(MasterDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
