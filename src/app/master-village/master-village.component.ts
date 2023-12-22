import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-village',
  templateUrl: './master-village.component.html',
  styleUrls: ['./master-village.component.css']
})
export class MasterVillageComponent {


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
  enteredVillage:any=null;
  searchTalukCode:any=null;
  searchVillage:any=null;
  masterVillageData:any=null;
  getVillageByVillageCode:any='';

  constructor(private villageService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
    this.userId = sessionStorage.getItem("userId");
    this.getAllState();
    this.search();
  }

  getAllState() {
    this.villageService.getAllState().subscribe((data: any) => {
      this.masterState = data;
    });
  }

  getDistrictByStateCode(event: any) {
    if (event != null && event != "") {
      this.villageService.getDistrictByStateCode(event).subscribe((data: any) => {
        this.masterDistrict = data;
        this.masterSubDistrict = null;
        this.masterVillage = null;
      });
    }
  }

  getTalukByDistrictCode(event: any) {
    if (event != null && event != "") {
      this.villageService.getTalukByDistrictCode(event).subscribe((data: any) => {
        this.masterSubDistrict = data;
        this.masterVillage = null;
      });
    }
  }

  createVillage() {
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
    else if (this.enteredVillage == null || this.enteredVillage == '') {
      this.toaster.error('Please enter Village');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "stateCode": this.enteredstateCode,
        "districtCode": this.enteredDistrictCode,
        "talukCode": this.enteredTalukCode,
        "villageName": this.enteredVillage,
        "createdBy": "21212",
        "updatedBy": "21212"
      }
      console.log(postData)
      this.villageService.addVillage(postData).subscribe((res: any) => {
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
      "talukCode":this.searchTalukCode,
      "villageName":this.searchVillage,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.villageService.searchVillage(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterVillageData= data.paginationListRecords;
      console.log(this.masterDistrict)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(villageCode: any) {
    this.editModal = 'block';
    this.villageService.getVillageByVillageCdoe(villageCode).subscribe((data: any) => {
      this.getVillageByVillageCode = data[0];
      this.enteredstateCode = this.getVillageByVillageCode.stateCode;
      this.enteredDistrictCode = this.getVillageByVillageCode.districtCode;
      this.enteredTalukCode = this.getVillageByVillageCode.talukCode;
      this.enteredVillage=this.getVillageByVillageCode.villageName;
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

    else if (this.enteredVillage == null || this.enteredVillage == '') {
      this.toaster.error('Please enter Village');
      return;
    }
    else {
      let postData = {
        "villageCode": this.getVillageByVillageCode.villageCode,
        "districtCode": this.enteredDistrictCode,
        "stateCode": this.enteredstateCode,
        "talukCode":this.enteredTalukCode,
        "villageName":this.enteredVillage,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "updatedBy": "2121"
      }
      console.log(postData)
      this.villageService.updateVillage(postData).subscribe((res: any) => {
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
    this.searchTaluk=null;
    this.searchVillage=null;
    this.enteredState = "";
    this.enteredDistrict = "";
    this.enteredStatus = "";
   this. enteredTalukCode="";
   this.enteredVillage=null;
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
