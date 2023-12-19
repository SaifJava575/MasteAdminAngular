import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterServiceService } from 'src/app/master-service.service';

@Component({
  selector: 'app-master-unit',
  templateUrl: './master-unit.component.html',
  styleUrls: ['./master-unit.component.css']
})
export class MasterUnitComponent {
  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchUnit: any = null;
  searchStatus: String = "";
  masterUnit: any = null;
  enteredUnit: any = null;
  enteredStatus: String = "";
  unitEditData: any = null;

  constructor(private unitService:MasterServiceService,private toaster:ToastrService){}

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.search();
  }

  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "unitName": this.searchUnit,
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.unitService.searchUnit(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterUnit = data.paginationListRecords;
      console.log(this.masterUnit)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  createUnit() {
    if (this.enteredUnit != '' && this.enteredUnit != null) {
      console.log(this.enteredUnit)
      let postData = {
        "activeFlag": true,
        "unitName": this.enteredUnit,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.unitService.addUnit(postData).subscribe((res: any) => {
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
      this.toaster.error('Please enter Unit Name')
    }
  }

  updateUnit() {
    if (this.enteredUnit != '' && this.enteredUnit != null) {
      console.log(this.enteredUnit)
      let postData = {
        "unitCode": this.unitEditData.unitCode,
        "activeFlag": this.enteredStatus == 'true' ? true : false,
        "unitName": this.enteredUnit,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.unitService.updateUnit(postData).subscribe((res: any) => {
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
      this.toaster.error('Please enter Unit Name')
    }
  }

  edit(data: any) {
    this.editModal = 'block';
    this.unitEditData = data;
    this.enteredUnit = this.unitEditData.unitName;
    if (this.unitEditData.activeFlag) {
      this.enteredStatus = 'true';
    }
    else {
      this.enteredStatus = 'false';
    }
  }

  pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }

  reset() {
    this.searchUnit = null;
    this.searchStatus = "";
    this.enteredUnit = null;
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

}
