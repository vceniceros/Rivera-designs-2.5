import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public _http: HttpClient) { }
  baseUrl = 'backend/mail.php';
  sendMessage(body: Form) {
    return this._http.post(this.baseUrl,body);
    }
  
 }
