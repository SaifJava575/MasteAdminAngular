import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MasterServiceService } from '../master-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.css']
})
export class MasterUserComponent {

  userForm: FormGroup;
  submitted: boolean = false;
  showModal: String = 'none';
  editModal: String = 'none';
  currentPageNo: number = 1;
  totalRecords: any;
  pageSize: number = 10;
  userId: any;
  searchOfficer: String = "";
  searchLoginId: String = "";
  searchDesignation: String = "";
  searchEmail: String = "";
  searchMobile: String = "";
  searchDistrict: String = "";
  searchSubDistrict: String = "";
  searchVillage: String = "";
  searchState: String = "";
  searchStatus: String = "";
  masterState: any = null;
  masterDistrict: any = null;
  masterSubDistrict: any = null;
  masterVillage: any = null;
  masterDesignation: any = null;
  masterUser: any = null;

  constructor(private fb:FormBuilder,private userService:MasterServiceService,private router:Router){
    this.userForm = this.fb.group({
      officerName: ["", Validators.required],
      designationId: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
      mobile: ["", [Validators.required, Validators.pattern('[6789][0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]],
      loginId: ["", Validators.required],
      stateCode: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    this.getAllDesignation();
    this.search();
  }

  getAllDesignation() {
    this.userService.getAllDesignation().subscribe((data: any) => {
      this.masterDesignation = data;
    });
  }
  searchBtn() {
    this.currentPageNo = 1;
    this.search();
  }

  search() {
    let searchData = {
      "activeFlag": this.searchStatus == 'true' ? true : this.searchStatus == 'false' ? false : null,
      "userName": this.searchOfficer,
      "designationId": this.searchDesignation,
      "email": this.searchEmail,
      "mobileNo": this.searchMobile,
      "loginId": this.searchLoginId
    }
    console.log(searchData)
    this.userService.searchUser(searchData, this.currentPageNo).subscribe((data: any) => {
      this.masterUser = data.paginationListRecords;
      console.log(this.masterUser)
      this.currentPageNo = data.currentPageNo;
      this.totalRecords = data.totalRecords;
      this.pageSize = data.pageLimit;
    })
  }

  edit(userId: any) {
    this.router.navigate(['/create-user']);
    sessionStorage.setItem("updateUserId", userId);
  }

  reset() {
    this.searchStatus = "";
    this.searchOfficer = "";
    this.searchDesignation = "";
    this.searchEmail = "";
    this.searchMobile = "";
    this.searchLoginId = "";
  }

  pageChange(event: any) {
    console.log(event)
    this.currentPageNo = event;
    this.search();
  }


}
