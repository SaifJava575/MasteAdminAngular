import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-taluk',
  templateUrl: './master-taluk.component.html',
  styleUrls: ['./master-taluk.component.css']
})
export class MasterTalukComponent {

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
  enteredstateCode:any=null;
  enteredDistrict: any = null;
  enteredDistrictCode:any=null;
  enteredTalukCode:any=null;
  enteredStatus: String = "";
  districtDataByCode: any = null;
  masterSubDistrict = null;
  masterVillage = null;

  searchStateCode:any=null;
  searchDistrictCode:any=null;
  searchTaluk:any=null;
  mastertaluk:any=null;
  getTalukByTalukCode:any=null;

  constructor(private talukService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
    this.userId = sessionStorage.getItem("userId");
    this.getAllState();
    this.search();
  }

  getAllState() {
    this.talukService.getAllState().subscribe((data: any) => {
      this.masterState = data;
    });
  }

  getDistrictByStateCode(event: any) {
    if (event != null && event != "") {
      this.talukService.getDistrictByStateCode(event).subscribe((data: any) => {
        this.masterDistrict = data;
        this.masterSubDistrict = null;
        this.masterVillage = null;
      });
    }
  }

  createTaluk() {
    if (this.enteredstateCode == null || this.enteredstateCode == '') {
      this.toaster.error('Please select State');
      return;
    }
    else if (this.enteredDistrictCode == null || this.enteredDistrictCode == '') {
      this.toaster.error('Please enter District');
      return;
    }
    else if (this.enteredTalukCode == null || this.enteredTalukCode == '') {
      this.toaster.error('Please enter Taluk');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "stateCode": this.enteredstateCode,
        "districtCode": this.enteredDistrictCode,
        "talukName": this.enteredTalukCode,
        "createdBy": "21212",
        "updatedBy": "21212"
      }
      console.log(postData)
      this.talukService.addTaluk(postData).subscribe((res: any) => {
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
      "stateCode": this.searchStateCode,
      "districtCode": this.searchDistrictCode,
      "talukName":this.searchTaluk,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.talukService.searchTaluk(searchData, this.currentPageNo).subscribe((data: any) => {
      this.mastertaluk = data.paginationListRecords;
      console.log(this.masterDistrict)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(talukCode: any) {
    this.editModal = 'block';
    this.talukService.getTalukByTalukCode(talukCode).subscribe((data: any) => {
      this.getTalukByTalukCode = data[0];
      this.enteredstateCode = this.getTalukByTalukCode.stateCode;
      this.enteredDistrictCode = this.getTalukByTalukCode.districtCode;
      this.enteredTalukCode = this.getTalukByTalukCode.talukName;
    });
  }

  updateTaluk() {
    if (this.enteredstateCode == null || this.enteredstateCode == '') {
      this.toaster.error('Please select State');
      return;
    }

    if (this.enteredDistrictCode == null || this.enteredDistrictCode == '') {
      this.toaster.error('Please select District');
      return;
    }

    else if (this.enteredTalukCode == null || this.enteredTalukCode == '') {
      this.toaster.error('Please enter taluk');
      return;
    }
    else {
      let postData = {
        "talukCode": this.getTalukByTalukCode.talukCode,
        "districtCode": this.enteredDistrictCode,
        "stateCode": this.enteredstateCode,
        "talukName":this.enteredTalukCode,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "updatedBy": "2121"
      }
      console.log(postData)
      this.talukService.updateTaluk(postData).subscribe((res: any) => {
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
