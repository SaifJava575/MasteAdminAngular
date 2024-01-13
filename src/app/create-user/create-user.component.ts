import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  userForm: FormGroup;
  submitted: boolean = false;
  showRoleModal: String = 'none';
  showJurisdictionModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  masterState: any = null;
  masterDesignation: any = null;
  masterRole: any = null;
  enteredRole: String = "";
  enteredStatus: String = "";
  userRoleList: any = null;
  userJurisdictionList: any = null;
  // updateUserId: any;
  editUser: boolean = false;
  userData: any = null;
  createdUserId: any;
  roleDataByUserId: any = null;
  editFlag: boolean = false;
  showAddRole: boolean = false;
  masterHeadOffice: any = null;
  masterZone: any = null;
  masterRegion: any = null;
  masterDepot: any = null;
  enteredHeadOffice: String = "";
  enteredZone: String = "";
  enteredRegion: String = "";
  enteredDepot: String = "";


  constructor(private toaster: ToastrService, private userService: MasterServiceService, private fb: FormBuilder,private route:ActivatedRoute) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      designationId: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
      mobileNo: ["", [Validators.required, Validators.pattern('[6789][0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]],
      loginId: ["", Validators.required],
      activeFlag: [""]
      // stateCode: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    if (sessionStorage.getItem("updateUserId") != null) {
      this.createdUserId = sessionStorage.getItem("updateUserId");
      this.editFlag = true;
      this.showAddRole = true;
      this.getUserDetails(this.createdUserId, "hide");
      this.getUserRoles(this.createdUserId);
      this.getUserJurisdiction(this.createdUserId);
      this.getAllHeadOffice();
      sessionStorage.removeItem("updateUserId");
      this.userForm.get('activeFlag')?.setValidators(Validators.required);
    }
    // this.getAllState();
    this.getAllDesignation();
    this.getAllRole();
  }

  // getAllState() {
  //   this.userService.getAllState().subscribe((data: any) => {
  //     this.masterState = data;
  //   });
  // }

  getAllDesignation() {
    this.userService.getAllDesignation().subscribe((data: any) => {
      this.masterDesignation = data;
    });
  }

  getAllRole() {
    this.userService.getAllRole().subscribe((data: any) => {
      this.masterRole = data;
    });
  }

  reset() {
    this.userForm.reset();
    this.submitted = false;
    this.enteredRole = "";
    this.userForm.get('designationId')?.setValue("");
    this.userForm.get('activeFlag')?.setValue("");
  }

  createUser() {
    this.submitted = true;
    if (this.userForm.valid) {
      let postData = {
        "activeFlag": true,
        "name": this.userForm.value.name,
        // "designationId": this.userForm.value.designationId.split('|')[0],
        "designationId": this.userForm.value.designationId,
        "email": this.userForm.value.email,
        "mobileNo": this.userForm.value.mobileNo,
        "loginId": this.userForm.value.loginId,
        // "stateCode": this.userForm.value.stateCode,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.userService.addUser(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          // this.editUser = true;
          this.showAddRole = true;
          this.createdUserId = res.message.slice(27);
          console.log(this.createdUserId);
          this.getUserDetails(this.createdUserId, "show");
          this.getAllHeadOffice();
        }
        else if (res.status == 406) {
          this.toaster.error('LoginId already exist!');
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
  }

  openModal(type: String) {
    if (type == 'R') {
      this.showRoleModal = 'block';
    }
    if (type == 'J') {
      this.showJurisdictionModal = 'block';
    }
  }

  closeRoleModal() {
    this.showRoleModal = 'none';
    this.showJurisdictionModal = 'none';
    this.enteredRole = "";
  }

  closeJurisdictionModal() {
    this.showRoleModal = 'none';
    this.showJurisdictionModal = 'none';
    this.masterZone = null;
    this.masterRegion = null;
    this.masterDepot = null;
    this.enteredHeadOffice = "";
    this.enteredZone = "";
    this.enteredRegion = "";
    this.enteredDepot = "";
  }

  addRoleToUser() {
    if (this.enteredRole == null || this.enteredRole == '') {
      this.toaster.error('Please select Role');
      return;
    }
    else {
      let roleData = {
        "roleId": this.enteredRole,
        "userId": this.createdUserId
      }
      let postData = {
        "activeFlag": true,
        "id": roleData,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.userService.addRoleToUser(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          this.closeRoleModal();
          this.getUserRoles(this.createdUserId);
        }
        else if (res.status == 304) {
          this.toaster.error('This role already exists. Please select another');
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
  }

  addJurisdictionToUser() {
    if (this.enteredHeadOffice == '') {
      this.toaster.error('Please select Head Office');
      return;
    }
    else if (this.enteredZone == '') {
      this.toaster.error('Please select Zone');
      return;
    }
    else if (this.enteredRegion == '') {
      this.toaster.error('Please select Region');
      return;
    }
    else if (this.enteredDepot == '') {
      this.toaster.error('Please select Depot');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "userId": this.createdUserId,
        "headOfficeId": this.enteredHeadOffice == 'null' ? null : this.enteredHeadOffice,
        "zoneId": this.enteredZone == 'null' ? null : this.enteredZone,
        "regionId": this.enteredRegion == 'null' ? null : this.enteredRegion,
        "depotId": this.enteredDepot == 'null' ? null : this.enteredDepot,
        "createdBy": this.userId,
        "updatedBy": this.userId,
      }
      console.log(postData)
      this.userService.addJurisdictionToUser(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          this.closeJurisdictionModal();
          this.getUserJurisdiction(this.createdUserId);
        }
        else if (res.status == 304) {
          this.toaster.error('This jurisdiction already exists. Please add another');
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
  }

  getUserRoles(userId: number) {
    this.userService.getUserRoles(userId).subscribe((data: any) => {
      this.userRoleList = data;
    });
  }

  getUserJurisdiction(userId: number) {
    this.userService.getUserJurisdictions(userId).subscribe((data: any) => {
      this.userJurisdictionList = data;
    });
  }

  // editRole(userRoleData: any) {
  //   this.editModal = 'block';
  //   console.log(userRoleData)
  //   this.createdUserId = userRoleData.userId;
  //   this.enteredRole = userRoleData.roleId;
  //   if (userRoleData.activeFlag) {
  //     this.enteredStatus = 'true';
  //   }
  //   else {
  //     this.enteredStatus = 'false';
  //   }
  // }

  // updateRole() {
  //   if (this.enteredRole != '' && this.enteredRole != null) {
  //     let roleData = {
  //       "roleId": this.enteredRole,
  //       "userId": this.createdUserId
  //     }
  //     let postData = {
  //       "activeFlag": this.enteredStatus == 'true' ? true : false,
  //       "id": roleData,
  //       "updatedBy": this.userId
  //     }
  //     console.log(postData)
  //     this.userService.updateUserRole(postData).subscribe((res: any) => {
  //       if (res.status == 200) {
  //         this.toaster.success(res.message);
  //         this.closeModal();
  //         this.getUserRoles(this.createdUserId);
  //       }
  //       else {
  //         this.toaster.error('Some error occurred.');
  //       }
  //     });
  //   }
  //   else {
  //     this.toaster.error('Please enter State Name')
  //   }
  // }

  getUserDetails(userId: number, action: String) {
    this.userService.getUserDetailsByUserId(userId).subscribe((data: any) => {
      this.userData = data[0];
      this.userForm.get('name')?.setValue(this.userData.name);
      this.userForm.get('designationId')?.setValue(this.userData.DesignationId);
      this.userForm.get('email')?.setValue(this.userData.email);
      this.userForm.get('mobileNo')?.setValue(this.userData.mobileNo);
      this.userForm.get('loginId')?.setValue(this.userData.loginId);
      if (this.userData.activeFlag) {
        this.userForm.get('activeFlag')?.setValue("true");
      }
      else {
        this.userForm.get('activeFlag')?.setValue("false");
      }
      if (action == "show") {
        this.editUser = true;
      }
    });
  }

  updateUser() {
    this.submitted = true;
    if (this.userForm.valid) {
      let postData = {
        "userId": this.userData.userId,
        "activeFlag": this.userForm.value.activeFlag == 'true' ? true : false,
        "name": this.userForm.value.name,
        "designationId": this.userForm.value.designationId,
        "email": this.userForm.value.email,
        "mobileNo": this.userForm.value.mobileNo,
        "loginId": this.userForm.value.loginId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.userService.updateUser(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.userData = postData;
          this.toaster.success(res.message);
          // this.editUser = true;
          this.createdUserId = this.userData.userId;
          this.getUserDetails(this.createdUserId, "show");
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
  }

  deleteRole(userData: any) {
    this.userService.deleteUserRole(userData.userId, userData.roleId).subscribe((res: any) => {
      if (res.status == 200) {
        this.toaster.success('UserRole deleted successfully');
        this.getUserRoles(userData.userId);
      }
    });
  }

  deleteJurisdiction(userData: any) {
    console.log(userData)
    this.userService.deleteUserJurisdiction(userData.mappingId).subscribe((res: any) => {
      if (res.status == 200) {
        this.toaster.success('UserJurisdiction deleted successfully');
        this.getUserJurisdiction(userData.userId);
      }
    });
  }

  getAllHeadOffice() {
    this.userService.getAllHeadOffice().subscribe((data: any) => {
      this.masterHeadOffice = data;
    });
  }

  getZoneByHeadOfficeId(event: any) {
    console.log(event.target.value);
    if (event.target.value != 'null') {
      this.userService.getZoneByHeadOfficeId(event.target.value).subscribe((data: any) => {
        this.masterZone = data;
        this.masterRegion = null;
        this.masterDepot = null;
        this.enteredZone = "";
        this.enteredRegion = "";
        this.enteredDepot = "";
      });
    }
  }

  getRegionByZoneId(event: any) {
    console.log(event.target.value);
    if (event.target.value != 'null') {
      this.userService.getRegionByZoneId(event.target.value).subscribe((data: any) => {
        this.masterRegion = data;
        this.masterDepot = null;
        this.enteredRegion = "";
        this.enteredDepot = "";
      });
    }
  }

  getDepotByRegionId(event: any) {
    console.log(event.target.value);
    if (event.target.value != 'null') {
      this.userService.getDepotByRegionId(event.target.value).subscribe((data: any) => {
        this.masterDepot = data;
        this.enteredDepot = "";
      });
    }
  }
}
