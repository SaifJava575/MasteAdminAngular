import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-master-depot',
  templateUrl: './master-depot.component.html',
  styleUrls: ['./master-depot.component.css']
})
export class MasterDepotComponent {

  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;

  searchHeadOffice: any = null;
  searchZoneId: any = null;
  searchRegion: any = null;
  searchDepot: any = null;
  selectedStatus: string = "";

  masterHeadOffice: any = null;
  masterZone: any = null;
  masterRegion: any = null;
  allDepot: any;
  depotDataById: any;

  constructor(private depotService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.search();
    this.getAllHeadOffice();
  }

  createDepot() {
    if (this.searchHeadOffice == null || this.searchHeadOffice == '') {
      this.toaster.error('Please select Head Office');
      return;
    }
    else if (this.searchZoneId == null || this.searchZoneId == '') {
      this.toaster.error('Please select Zone');
      return;
    }
    else if (this.searchRegion == null || this.searchRegion == '') {
      this.toaster.error('Please select Region');
      return;
    }
    else if (this.searchDepot == null || this.searchDepot == '') {
      this.toaster.error('Please enter Depot Name');
      return;
    }
    else {
      let postData = {
        "activeFlag": true,
        "headOfficeId": Number(this.searchHeadOffice),
        "zoneId": Number(this.searchZoneId),
        "regionId": Number(this.searchRegion),
        "depotName": this.searchDepot,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.depotService.addDepot(postData).subscribe((res: any) => {
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
      "regionId": this.searchRegion,
      "depotName": this.searchDepot,
    }
    console.log(searchData)
    this.depotService.searchDepot(searchData, this.currentPageNo).subscribe((data: any) => {
      this.allDepot = data.paginationListRecords;
      console.log(this.allDepot)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }


  getAllHeadOffice() {
    this.depotService.getAllHeadOffice().subscribe((data: any) => {
      this.masterHeadOffice = data;
    });
  }

  getZoneByHeadOfficeId(event: any) {
    console.log(event.target.value);
    this.depotService.getZoneByHeadOfficeId(event.target.value).subscribe((data: any) => {
      this.masterZone = data;
      this.searchZoneId = null;
      this.searchRegion = null;
      this.searchDepot = null;
      this.selectedStatus = "";
    });
  }
  getRegionByZoneId(event: any) {
    console.log(event.target.value);
    this.depotService.getRegionByZoneId(event.target.value).subscribe((data: any) => {
      this.masterRegion = data;
      this.searchRegion = null;
      this.searchDepot = null;
      this.selectedStatus = "";
    });
  }

  edit(regionId: number) {
    this.editModal = 'block';
    this.depotService.getDepotById(regionId).subscribe((data: any) => {
      this.depotDataById = data[0];
      this.searchHeadOffice = this.depotDataById.headOfficeId;
      this.getZoneByHeadOfficeIdUpdate(this.depotDataById.headOfficeId);
      this.searchZoneId = this.depotDataById.zoneId;
      this.getRegionByZoneIdUpdate(this.depotDataById.zoneId);
      this.searchRegion = this.depotDataById.regionId;
      this.searchDepot = this.depotDataById.depotName;
      if (this.depotDataById.activeFlag) {
        this.selectedStatus = 'true';
      }
      else {
        this.selectedStatus = 'false';
      }
    });
  }

  updateDepot() {
    let postData = {
      "depotId": Number(this.depotDataById.depotId),
      "depotName": this.searchDepot,
      "regionId": Number(this.searchRegion),
      "zoneId": Number(this.searchZoneId),
      "headOfficeId": Number(this.searchHeadOffice),
      "activeFlag": this.selectedStatus == 'true' ? true : false,
      "updatedBy": "4321"
    }
    console.log(postData)
    this.depotService.updateDepot(postData).subscribe((res: any) => {
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
    this.depotService.getZoneByHeadOfficeId(id).subscribe((data: any) => {
      this.masterZone = data;
    });
  }

  getRegionByZoneIdUpdate(id: any) {
    this.depotService.getRegionByZoneId(id).subscribe((data: any) => {
      this.masterRegion = data;
    });
  }

  reset() {
    this.searchHeadOffice = null;
    this.searchZoneId = null;
    this.searchRegion = null;
    this.searchDepot = null;
    this.selectedStatus = "";

    this.masterZone = null;
    this.masterRegion = null;
  }

  openModal() {
    this.showModal = 'block';
    this.reset();
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
