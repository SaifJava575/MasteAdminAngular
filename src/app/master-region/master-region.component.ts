import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-region',
  templateUrl: './master-region.component.html',
  styleUrls: ['./master-region.component.css']
})
export class MasterRegionComponent {
  showModal: String = 'none';
  enteredHeadOfficeName: String = '';
  showRecord: boolean = true;
  allHeadOffice: any;
  userId: any;
  searchHeadOffice: any = null;
  selectedStatus: string = "";
  headOfficeDataById: any;
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;

  enteredZoneName: String = '';
  selectedHeadOffice: any = null;
  searchZoneId: any = null;
  masterZone: any;

  enteredRegionName: String = '';
  selectedZone: any = null;
  searchRegion: String = '';
  allRegion: any;
  regionDataById: any;

  constructor(private regionService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.search();
    this.getAllHeadOffice();
  }

  createRegion() {
    if (this.selectedHeadOffice == null || this.selectedHeadOffice == '') {
      this.toaster.error('Please select Head Office');
      return;
    }
    else if (this.selectedZone == null || this.selectedZone == '') {
      this.toaster.error('Please select Zone');
      return;
    }
    else if (this.enteredRegionName == null || this.enteredRegionName == '') {
      this.toaster.error('Please enter Region Name');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "headOfficeId": Number(this.selectedHeadOffice),
        "zoneId": Number(this.selectedZone),
        "regionName": this.enteredRegionName,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.regionService.addRegion(postData).subscribe((res: any) => {
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
      "headOfficeId": this.searchHeadOffice,
      "activeFlag": this.selectedStatus == 'true' ? true : this.selectedStatus == 'false' ? false : null,
      "zoneId": this.searchZoneId,
      "regionName": this.searchRegion
    }
    console.log(searchData)
    this.regionService.searchRegion(searchData, this.currentPageNo).subscribe((data: any) => {
      this.allRegion = data.paginationListRecords;
      console.log(this.allRegion)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(regionId: number) {
    this.editModal = 'block';
    this.regionService.getRegionById(regionId).subscribe((data: any) => {
      this.regionDataById = data[0];
      this.selectedHeadOffice = this.regionDataById.headOfficeId;
      this.getZoneByHeadOfficeIdUpdate(this.regionDataById.headOfficeId);
      this.searchZoneId = this.regionDataById.zoneId;
      this.searchRegion = this.regionDataById.regionName;
      if (this.regionDataById.activeFlag) {
        this.selectedStatus = 'true';
      }
      else {
        this.selectedStatus = 'false';
      }
    });
  }

  updateRegion() {
    let postData = {
      "regionId": Number(this.regionDataById.regionId),
      "regionName": this.searchRegion,
      "zoneId": Number(this.searchZoneId),
      "headOfficeId": Number(this.selectedHeadOffice),
      "activeFlag": this.selectedStatus == 'true' ? true : false,
      "updatedBy": this.userId
    }
    console.log(postData)
    this.regionService.updateRegion(postData).subscribe((res: any) => {
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
  getZoneByHeadOfficeIdUpdate(id: any) {
    this.regionService.getZoneByHeadOfficeId(id).subscribe((data: any) => {
      this.masterZone = data;
    });
  }

  getAllHeadOffice(){
   this.regionService.getAllHeadOffice().subscribe((data:any)=>{
     this.allHeadOffice=data;
   })}

   getZoneByHeadOfficeId(event: any) {
    console.log(event.target.value);
    this.regionService.getZoneByHeadOfficeId(event.target.value).subscribe((data:any)=>{
      this.masterZone=data;
    })
   }

   pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }

   reset() {
    this.searchHeadOffice = null;
    this.selectedStatus = "";
    this.searchZoneId = null;
    this.searchRegion = "";
  }

  openModal() {
    this.showModal = 'block';
    this.reset();
  }

  closeModal() {
    this.showModal = 'none';
    this.editModal = 'none';
    this.selectedHeadOffice = null;
    this.selectedZone = null;
    this.enteredRegionName = '';
    this.masterZone = null;
    this.reset();
  }


}
