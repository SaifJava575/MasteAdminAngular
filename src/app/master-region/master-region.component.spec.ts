import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRegionComponent } from './master-region.component';

describe('MasterRegionComponent', () => {
  let component: MasterRegionComponent;
  let fixture: ComponentFixture<MasterRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterRegionComponent]
    });
    fixture = TestBed.createComponent(MasterRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
