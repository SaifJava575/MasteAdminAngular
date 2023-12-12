import { HttpClient } from '@angular/common/http';
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
    return this.http.post(`${this.baseUrl}/add-headoffice`, data)
    }

    searchHeadOffice(data :any, page: number): Observable<any> {
    return this.http.post( `${this.baseUrl}/searchHeadOffice/`+page, data).pipe(map((result: any) => {
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
  
