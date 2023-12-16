import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-state',
  templateUrl: './master-state.component.html',
  styleUrls: ['./master-state.component.css']
})
export class MasterStateComponent {

  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchState: any = null;
  searchStatus: String = "";
  masterState: any = null;
  enteredState: any = null;
  enteredStatus: String = "";
  stateDataByCode: any = null;

  constructor(private stateService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.search();
  }

  createState() {
    if (this.enteredState != '' && this.enteredState != null) {
      console.log(this.enteredState)
      let postData = {
        "activeFlag": true,
        "stateName": this.enteredState,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.stateService.addState(postData).subscribe((res: any) => {
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
  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "stateName": this.searchState,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.stateService.searchState(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterState = data.paginationListRecords;
      console.log(this.masterState)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(stateCode: any) {
    this.editModal = 'block';
    this.stateService.getStateByStateCode(stateCode).subscribe((data: any) => {
      this.stateDataByCode = data[0];
      this.enteredState = this.stateDataByCode.stateName;
      if (this.stateDataByCode.activeFlag) {
        this.enteredStatus = 'true';
      }
      else {
        this.enteredStatus = 'false';
      }
    });
  }

  updateState() {
    if (this.enteredState != '' && this.enteredState != null) {
      console.log(this.enteredState)
      let postData = {
        "stateCode": this.stateDataByCode.stateCode,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "stateName": this.enteredState,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.stateService.updateState(postData).subscribe((res: any) => {
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
    this.searchState = null;
    this.searchStatus = "";
    this.enteredState = null;
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
