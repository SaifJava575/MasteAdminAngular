import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map,catchError,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  private baseUrl='http://localhost:5200/admin';
  constructor(private http:HttpClient) { }

  /* ----------------Master Head Office Integreted----------------------------*/
   addHeadOffice(data :any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-headoffice`, data).pipe(map((result:any)=>{return result;}),catchError(this.errorHandler))
    }

    searchHeadOffice(data :any, page: number): Observable<any> {
    return this.http.post( `${this.baseUrl}/searchHeadOffice/`+page, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getAllHeadOffice(): Observable<any> {
    return this.http.get( `${this.baseUrl}/get-all-headOffice`).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getHeadOfficeById(headOfficeId :any): Observable<any> {
    const params = new HttpParams().set('headOfficeId', headOfficeId);
    return this.http.get(`${this.baseUrl}/get-all-headOffice-by-id`, { params }).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  updateHeadOffice(data :any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-headOffice`, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  // ----------------Master Zone Api Integreted----------------------------
  addZone(data :any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-zone`, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  searchZone(data :any, page: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/searchMasterZone/`+ page, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getZoneById(zoneId :any): Observable<any> {
    const params = new HttpParams().set('zoneId', zoneId);
    return this.http.get(`${this.baseUrl}/get-all-zone-by-id`, { params }).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getZoneByHeadOfficeId(headOfficeId :any): Observable<any> {
    const params = new HttpParams().set('headOfficeId', headOfficeId );
    return this.http.get(`${this.baseUrl}/get-all-zone-by-headoffice-id`, { params }).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  updateZone(data :any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-zone`, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  //=========================Master Region Api Integreted =============================
  addRegion(data :any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-region`, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  searchRegion(data :any, page: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/searchMasterRegion/` + page, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getRegionById(regionId :any): Observable<any> {
    const params = new HttpParams().set('regionId', regionId);
    return this.http.get(`${this.baseUrl}/get-all-region-by-id`, { params }).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  getRegionByZoneId(zoneId :any): Observable<any> {
    const params = new HttpParams().set('zoneId', zoneId);
    return this.http.get(`${this.baseUrl}/get-all-region-by-zone-id`, { params }).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

  updateRegion(data :any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-region`, data).pipe(map((result: any) => {
      return result;
    }), catchError(this.errorHandler));
  }

 //=============== Master Depot Api Integreted ===============================

 addDepot(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-depot`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchDepot(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchdepot/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getDepotById(depotId :any): Observable<any> {
  const params = new HttpParams().set('depotId', depotId);
  return this.http.get(`${this.baseUrl}/get-all-depot-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateDepot(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-depot`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getDepotByRegionId(regionId :any): Observable<any> {
  const params = new HttpParams().set('regionId', regionId);
  return this.http.get(`${this.baseUrl}/get-all-depot-by-region-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//================== State Api Integreted =====================
addState(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-state`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchState(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/getmasterstate/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getStateByStateCode(stateId :any): Observable<any> {
  const params = new HttpParams().set('stateId', stateId);
  return this.http.get(`${this.baseUrl}/get-state-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateState(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-state`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getAllState(): Observable<any> {
  return this.http.get(`${this.baseUrl}/get-all-state`).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//============== District Api Inegreted ================
addDistrict(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}add-district`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchDistrict(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchDistrict/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getDistrictByDistrictCode(districtCode :any): Observable<any> {
  const params = new HttpParams().set('/districtCode', districtCode);
  return this.http.get(`${this.baseUrl}/get-all-district-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getDistrictByStateCode(stateCode :any): Observable<any> {
  const params = new HttpParams().set('stateCode', stateCode);
  return this.http.get(`${this.baseUrl}/get-all-district-by-state-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}


updateDistrict(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-district`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

// ====================Master Taluk Api ================
searchTaluk(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchtaluk/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

addTaluk(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-taluk`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}
getTalukByTalukCode(talukCode :any): Observable<any> {
  const params = new HttpParams().set('talukCode', talukCode);
  return this.http.get(`${this.baseUrl}/get-all-taluk-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getTalukByDistrictCode(districtCode :any): Observable<any> {
  const params = new HttpParams().set('districtCode', districtCode);
  return this.http.get(`${this.baseUrl}/get-all-taluk-by-district-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateTaluk(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-taluk`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

// ============= Master Village Api Integreted ======================
addVillage(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-village`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchVillage(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchVillage/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getVillageByVillageCdoe(villageCdoe :any): Observable<any> {
  const params = new HttpParams().set('villageCdoe', villageCdoe);
  return this.http.get(`${this.baseUrl}/get-all-village-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateVillage(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-village`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//============== Master User Role ===========================
addRole(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-role`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchRole(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchrole/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getRoleById(roleId :any): Observable<any> {
  const params = new HttpParams().set('roleId', roleId);
  return this.http.get(`${this.baseUrl}/get-all-role-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateRole(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-role`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getAllRole(): Observable<any> {
  return this.http.get(`${this.baseUrl}/get-all-role`).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

// ----------------Master-Designation Api Integreted ----------------------------
addDesignation(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/create-designation`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchDesignation(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchdesignation/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getDesignationById(DesignationId :any): Observable<any> {
  const params = new HttpParams().set('DesignationId', DesignationId);
  return this.http.get(`${this.baseUrl}/get-all-designation-by-id`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}


updateDesignation(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-designation`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getAllDesignation(): Observable<any> {
  return this.http.get(`${this.baseUrl}/designation-list`).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//------------------- Master User Api Integreted -----------------------
addUser(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/save-user-details`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getUserDetailsByUserId(userId :any): Observable<any> {
  return this.http.get(`${this.baseUrl}/getUserDetails/` + userId).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}
searchUser(data :any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchuserdetailsforcreate/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateUser(data :any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-user-details`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//------------------ Master User Role Mapping Api Integreted ------------------
addRoleToUser(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/role-assignment`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getUserRoles(userId :any): Observable<any> {
  return this.http.get(`${this.baseUrl}/getuserrolemapping/` + userId).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

deleteUserRole(userId: any, roleId:any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteUserRoleMapping/` + userId + "/" + roleId).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}
//------------Master User Juricdiction Role Mapping Api Integreted --------------------
addJurisdictionToUser(data :any): Observable<any> {
  return this.http.post(`${this.baseUrl}/saveUserJurisdictionMapping`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

getUserJurisdictions(userId :any): Observable<any> {
  return this.http.get(`${this.baseUrl}/getUserJurisdictionMapping/` + userId).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

deleteUserJurisdiction(mappingId :any): Observable<any> {
  const params = new HttpParams().set('mappingId', mappingId);
  return this.http.delete(`${this.baseUrl}/deleteUserJurisdictionMapping`, { params }).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

//--------------------Master Unit Api Integreted --------------------
addUnit(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/add-unit`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

searchUnit(data: any, page: number): Observable<any> {
  return this.http.post(`${this.baseUrl}/searchunit/` + page, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

updateUnit(data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-unit`, data).pipe(map((result: any) => {
    return result;
  }), catchError(this.errorHandler));
}

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);

  }

  }

