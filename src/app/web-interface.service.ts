import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from './formConfig';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WebInterfaceService {

  private getURL = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  private postURL = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}) 
  }

  constructor(
    private http: HttpClient  
  ) { }

  private handleError(error: HttpErrorResponse){
    alert('Unfortunately, your feedback could not be submitted :(');
    return throwError('Error in submitting form data via POST request')
  }

  getFormData():Observable<Config>{    
    return this.http.get<Config>(this.getURL);
  }

  submitFormData(formData: Config): Observable<Config>{

    return this.http.post<Config>(this.postURL, formData, this.options).pipe(
      catchError(this.handleError)
    )


  }

}
