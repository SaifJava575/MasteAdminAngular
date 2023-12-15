import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDepotComponent } from './master-depot.component';

describe('MasterDepotComponent', () => {
  let component: MasterDepotComponent;
  let fixture: ComponentFixture<MasterDepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterDepotComponent]
    });
    fixture = TestBed.createComponent(MasterDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
