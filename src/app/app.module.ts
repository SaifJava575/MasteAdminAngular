import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select'; // Import NgSelectModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HeadofficeComponent } from './headoffice/headoffice.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MasterZoneComponent } from './master-zone/master-zone.component';
import { MasterRegionComponent } from './master-region/master-region.component';
import { MasterDepotComponent } from './master-depot/master-depot.component';
import { MasterStateComponent } from './master-state/master-state.component';
import { MasterDistrictComponent } from './master-district/master-district.component';
import { MasterUserRoleComponent } from './master-user-role/master-user-role.component';
import { MasterDesignationComponent } from './master-designation/master-designation.component';
import { MasterUserComponent } from './master-user/master-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { ContentComponent } from './layout/content/content.component';
import { MasterTalukComponent } from './master-taluk/master-taluk.component';
import { MasterVillageComponent } from './master-village/master-village.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadofficeComponent,
    MasterZoneComponent,
    MasterRegionComponent,
    MasterDepotComponent,
    MasterStateComponent,
    MasterDistrictComponent,
    MasterUserRoleComponent,
    MasterDesignationComponent,
    MasterUserComponent,
    CreateUserComponent,
    HeaderComponent,
    FooterComponent,
    MenuBarComponent,
    ContentComponent,
    MasterTalukComponent,
    MasterVillageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
