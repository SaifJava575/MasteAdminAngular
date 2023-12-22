import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterVillageComponent } from './master-village.component';

describe('MasterVillageComponent', () => {
  let component: MasterVillageComponent;
  let fixture: ComponentFixture<MasterVillageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterVillageComponent]
    });
    fixture = TestBed.createComponent(MasterVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
