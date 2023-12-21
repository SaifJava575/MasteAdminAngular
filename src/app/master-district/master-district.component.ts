import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-district',
  templateUrl: './master-district.component.html',
  styleUrls: ['./master-district.component.css']
})
export class MasterDistrictComponent {
  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchDistrict: any = null;
  searchState: String = "";
  searchStatus: String = "";
  masterState: any = null;
  masterDistrict: any = null;
  enteredState: String = "";
  enteredDistrict: any = null;
  enteredStatus: String = "";
  districtDataByCode: any = null;;

  constructor(private districtService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
    this.userId = sessionStorage.getItem("userId");
    this.getAllState();
    this.search();
  }

  getAllState() {
    this.districtService.getAllState().subscribe((data: any) => {
      this.masterState = data;
    });
  }

  createDistrict() {
    if (this.enteredState == null || this.enteredState == '') {
      this.toaster.error('Please select State');
      return;
    }
    else if (this.enteredDistrict == null || this.enteredDistrict == '') {
      this.toaster.error('Please enter District');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "stateCode": this.enteredState,
        "districtName": this.enteredDistrict,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.districtService.addDistrict(postData).subscribe((res: any) => {
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
      "stateCode": this.searchState,
      "districtName": this.searchDistrict,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.districtService.searchDistrict(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterDistrict = data.paginationListRecords;
      console.log(this.masterDistrict)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(districtCode: any) {
    this.editModal = 'block';
    this.districtService.getDistrictByDistrictCode(districtCode).subscribe((data: any) => {
      this.districtDataByCode = data[0];
      this.enteredState = this.districtDataByCode.stateCode;
      this.enteredDistrict = this.districtDataByCode.districtName;
    });
  }

  updateDistrict() {
    if (this.enteredState == null || this.enteredState == '') {
      this.toaster.error('Please select State');
      return;
    }
    else if (this.enteredDistrict == null || this.enteredDistrict == '') {
      this.toaster.error('Please enter District');
      return;
    }
    else {
      let postData = {
        "districtCode": this.districtDataByCode.districtCode,
        "districtName": this.enteredDistrict,
        "stateCode": this.enteredState,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.districtService.updateDistrict(postData).subscribe((res: any) => {
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
    this.searchState = "";
    this.searchDistrict = null;
    this.searchStatus = "";
    this.enteredState = "";
    this.enteredDistrict = null;
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
