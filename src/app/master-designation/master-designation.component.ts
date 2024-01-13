import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-designation',
  templateUrl: './master-designation.component.html',
  styleUrls: ['./master-designation.component.css']
})
export class MasterDesignationComponent {

  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchDesignation: any = null;
  searchStatus: String = "";
  masterDesignation: any = null;
  enteredDesignation: any = null;
  enteredStatus: String = "";
  designationDataById: any = null;

  constructor(private designationService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
    this.userId=sessionStorage.getItem("userId");
    this.search();
  }

  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "designationName": this.searchDesignation,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.designationService.searchDesignation(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterDesignation = data.paginationListRecords;
      console.log(this.masterDesignation)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  createDesignation() {
    if (this.enteredDesignation != '' && this.enteredDesignation != null) {
      let postData = {
        "activeFlag": true,
        "designationName": this.enteredDesignation,
        "createdBy": "1234",
        "updatedBy": this.userId
      }
      console.log(postData)
      this.designationService.addDesignation(postData).subscribe((res: any) => {
        if (res.status == 201) {
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
      this.toaster.error('Please enter Designation Name')
    }
  }

  edit(designationId: any) {
    this.editModal = 'block';
    this.designationService.getDesignationById(designationId).subscribe((data: any) => {
      this.designationDataById = data[0];
      this.enteredDesignation = this.designationDataById.designationName;
      if (this.designationDataById.activeFlag) {
        this.enteredStatus = 'true';
      }
      else {
        this.enteredStatus = 'false';
      }
    });
  }


  updateDesignation() {
    if (this.enteredDesignation != '' && this.enteredDesignation != null) {
      console.log(this.enteredDesignation)
      let postData = {
        "designationId": this.designationDataById.designationId,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "designationName": this.enteredDesignation,
        "updatedBy": "1234"
      }
      console.log(postData)
      this.designationService.updateDesignation(postData).subscribe((res: any) => {
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
      this.toaster.error('Please enter Designation Name')
    }
  }

  reset() {
    this.searchDesignation = null;
    this.searchStatus = "";
    this.enteredDesignation = "";
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
