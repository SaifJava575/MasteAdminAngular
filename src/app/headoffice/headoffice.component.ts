import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-headoffice',
  templateUrl: './headoffice.component.html',
  styleUrls: ['./headoffice.component.css']
})
export class HeadofficeComponent {

  showModal: String = 'none';
  enteredHeadOfficeName: String = '';
  showRecord: boolean = true;
  allHeadOffice: any;
  userId: any;
  searchHeadOffice: any = null;
  selectedStatus: string = "";
  showCreate: boolean = true;
  headOfficeDataById: any;
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;


  constructor(private toaster: ToastrService, private userService: MasterServiceService) { }

  ngOnInit() {
    //this.userId = sessionStorage.getItem("userId");
    // this.getAllHeadOffice();
    this.search();
  }


  createHeadOffice() {
    if (this.enteredHeadOfficeName != '' && this.enteredHeadOfficeName != null) {
      console.log(this.enteredHeadOfficeName)
      let postData = null;
      postData = {
        "activeFlag": true,
        "headOfficeName": this.enteredHeadOfficeName,
        "createdBy": this.userId,
        "updatedBy": this.userId
      }
      console.log(postData)
      this.userService.addHeadOffice(postData).subscribe((res: any) => {
        if (res.status == 200) {
          this.toaster.success(res.message);
          this.closeModal();
          //this.search();
        }
        else {
          this.toaster.error('Some error occurred.');
        }
      });
    }
    else {
      this.toaster.error('Please enter Head Office Name')
    }
  }

  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "headOfficeName": this.searchHeadOffice,
      "activeFlag": this.selectedStatus == 'true' ? true : this.selectedStatus == 'false' ? false : null
    }
    console.log(searchData)
    this.userService.searchHeadOffice(searchData, this.currentPageNo).subscribe((data: any) => {
      this.allHeadOffice = data.paginationListRecords;
      console.log(this.allHeadOffice)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  reset() {
    this.searchHeadOffice = null;
    this.selectedStatus = "";
  }

  openModal() {
    this.showCreate = true;
    this.showModal = 'block';
  }


  closeModal() {
    this.showModal = 'none';
    this.editModal = 'none';
    this.enteredHeadOfficeName = '';
    this.selectedStatus = "";
    this.searchHeadOffice = null;
  }

  pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }

}
