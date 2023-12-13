import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterZoneComponent } from './master-zone.component';

describe('MasterZoneComponent', () => {
  let component: MasterZoneComponent;
  let fixture: ComponentFixture<MasterZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterZoneComponent]
    });
    fixture = TestBed.createComponent(MasterZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
