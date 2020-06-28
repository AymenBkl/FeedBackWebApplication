import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProccesHttpMessageService } from './procces-http-message.service'
import { Feedback } from '../Models/feedback';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { baseURL } from 'src/environments/baseURL';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient : HttpClient,
              private proccesHttpMessage : ProccesHttpMessageService ) { }


  postFeedBack(feedback : Feedback) : Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Feedback>(baseURL + "users/feedback",JSON.stringify(feedback),httpOptions)
            .pipe(catchError(this.proccesHttpMessage.handleError));
  }

  postTest() : Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<any>(baseURL + "users/test",JSON.stringify({'name':'lol'}),httpOptions)
              .pipe(catchError(this.proccesHttpMessage.handleError));
  }
}
