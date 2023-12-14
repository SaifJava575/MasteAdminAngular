import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map,catchError,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  private baseUrl='http://localhost:5200/admin/';
  constructor(private http:HttpClient) { }

  /* ----------------Head Office----------------------------*/
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

  // ----------------Zone----------------------------
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

  updateZone(data :any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-zone`, data).pipe(map((result: any) => {
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

