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
  enteredStateCode:any=null;
  searchStateCode:any=null;
  constructor(private stateService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.search();
  }

  createState() {
    if (this.enteredState == null || this.enteredState == '') {
      this.toaster.error('Please select State');
      return;
    }if (this.enteredStateCode == null || this.enteredStateCode == '') {
      this.toaster.error('Please select State Code');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "stateName": this.enteredState,
        "createdBy": "1234",
        "updatedBy": "1234",
        "stateCode":this.enteredStateCode
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

  }


  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "stateName": this.searchState,
      "stateCode":this.searchStateCode,
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
      this.enteredStateCode=this.stateDataByCode.stateCode;
      if (this.stateDataByCode.activeFlag) {
        this.enteredStatus = 'true';
      }
      else {
        this.enteredStatus = 'false';
      }
    });
  }

  updateState() {
    if (this.enteredState == null || this.enteredState == '') {
      this.toaster.error('Please select State');
      return;
    }
    if (this.enteredStateCode == null || this.enteredStateCode == '') {
      this.toaster.error('Please select StateCode');
      return;
    }
    else  {
      console.log(this.enteredState)
      let postData = {
        "stateId": this.stateDataByCode.stateId,
        "stateCode":this.enteredStateCode,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "stateName": this.enteredState,
        "updatedBy": "1234"
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
  
  }
  reset() {
    this.searchState = null;
    this.searchStatus = "";
    this.enteredState = null;
    this.enteredStatus = "";
    this.searchStateCode=null;
    this.enteredStateCode=null;
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
