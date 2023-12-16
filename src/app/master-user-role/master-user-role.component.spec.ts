import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUserRoleComponent } from './master-user-role.component';

describe('MasterUserRoleComponent', () => {
  let component: MasterUserRoleComponent;
  let fixture: ComponentFixture<MasterUserRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterUserRoleComponent]
    });
    fixture = TestBed.createComponent(MasterUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
