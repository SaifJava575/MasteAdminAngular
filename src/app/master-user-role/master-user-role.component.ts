import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-user-role',
  templateUrl: './master-user-role.component.html',
  styleUrls: ['./master-user-role.component.css']
})
export class MasterUserRoleComponent {

  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchRole: any = null;
  searchStatus: String = "";
  masterRole: any = null;
  enteredRole: any = null;
  enteredStatus: String = "";
  roleDataById: any = null;

  constructor(private roleService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
    this.userId = sessionStorage.getItem("userId");
    this.search();
  }

  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "roleName": this.searchRole,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.roleService.searchRole(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterRole = data.paginationListRecords;
      console.log(this.masterRole)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  createRole() {
    if (this.enteredRole != '' && this.enteredRole != null) {
      let postData = {
        "activeFlag": true,
        "roleName": this.enteredRole,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.roleService.addRole(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          this.closeModal();
          this.search();
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
    else {
      this.toaster.error('Please enter State Name')
    }
  }

  edit(roleId: any) {
    this.editModal = 'block';
    this.roleService.getRoleById(roleId).subscribe((data: any) => {
      this.roleDataById = data[0];
      this.enteredRole = this.roleDataById.roleName;
      if (this.roleDataById.activeFlag) {
        this.enteredStatus = 'true';
      }
      else {
        this.enteredStatus = 'false';
      }
    });
  }

  updateRole() {
    if (this.enteredRole != '' && this.enteredRole != null) {
      console.log(this.enteredRole)
      let postData = {
        "roleId": this.roleDataById.roleId,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "roleName": this.enteredRole,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.roleService.updateRole(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          this.closeModal();
          this.search();
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
    else {
      this.toaster.error('Please enter State Name')
    }
  }

  reset() {
    this.searchRole = null;
    this.searchStatus = "";
    this.enteredRole = null;
    this.enteredStatus = "";
  }

  openModal() {
    this.showModal = 'block';
  }

  closeModal() {
    this.showModal = 'none';
    this.editModal = 'none';
    this.reset();
  }

  pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }

}
