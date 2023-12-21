import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTalukComponent } from './master-taluk.component';

describe('MasterTalukComponent', () => {
  let component: MasterTalukComponent;
  let fixture: ComponentFixture<MasterTalukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterTalukComponent]
    });
    fixture = TestBed.createComponent(MasterTalukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
