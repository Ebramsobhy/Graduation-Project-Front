import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './../../Interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = 'http://localhost:5000/contact'; 

  constructor(private http: HttpClient) { }

  sendMessage(msg: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, msg);
  }
}
