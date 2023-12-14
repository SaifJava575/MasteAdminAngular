import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-zone',
  templateUrl: './master-zone.component.html',
  styleUrls: ['./master-zone.component.css']
})
export class MasterZoneComponent {
  showModal: String = 'none';
  enteredHeadOfficeName: String = '';
  showRecord: boolean = true;
  masterHeadOffice: any;
  userId: any;
  searchHeadOffice: any = null;
  selectedStatus: string = "";
  showCreate: boolean = true;
  headOfficeDataById: any;
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;

  enteredZoneName: String = '';
  selectedHeadOffice: any = null;
  searchZoneName: any = null;
  allZone: any;
  zoneDataById: any;

  constructor(private masterService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit(){
   this.getAllHeadOffice()
  }

  getAllHeadOffice() {
    this.masterService.getAllHeadOffice().subscribe((data: any) => {
      this.masterHeadOffice = data;
    });
  }

  createZone() {
    if (this.selectedHeadOffice == null || this.selectedHeadOffice == '') {
      this.toaster.error('Please select Head Office');
      return;
    }
    else if (this.enteredZoneName == null || this.enteredZoneName == '') {
      this.toaster.error('Please enter Zone');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "headOfficeId": Number(this.selectedHeadOffice),
        "zoneName": this.enteredZoneName,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.masterService.addZone(postData).subscribe((res: any) => {
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
      "zoneName": this.searchZoneName
    }
    console.log(searchData)
    this.masterService.searchZone(searchData, this.currentPageNo).subscribe((data: any) => {
      this.allZone = data.paginationListRecords;
      console.log(this.allZone)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(zoneId: number) {
    this.showCreate = false;
    this.editModal = 'block';
    this.masterService.getZoneById(zoneId).subscribe((data: any) => {
      this.zoneDataById = data[0];
      this.selectedHeadOffice = this.zoneDataById.headOfficeId;
      this.enteredZoneName = this.zoneDataById.zoneName;
      if (this.zoneDataById.activeFlag) {
        this.selectedStatus = 'true';
      }
      else {
        this.selectedStatus = 'false';
      }
    });
  }

  updateHeadOffice() {
    let postData = {
      "zoneId": this.zoneDataById.zoneId,
      "zoneName": this.enteredZoneName,
      "headOfficeId": this.selectedHeadOffice,
      "activeFlag": this.selectedStatus == 'true' ? true : false,
      "updatedBy": this.userId
    }
    console.log(postData)
    this.masterService.updateZone(postData).subscribe((res: any) => {
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


  pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }

  reset() {
    this.searchHeadOffice = null;
    this.selectedStatus = "";
    this.searchZoneName = "";
  }


  openModal() {
    this.showCreate = true;
    this.showModal = 'block';
  }

  closeModal() {
    this.showModal = 'none';
    this.editModal = 'none';
    this.selectedHeadOffice = null;
    this.enteredZoneName = '';
    this.selectedStatus = "";
  }


}
