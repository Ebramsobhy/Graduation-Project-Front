import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'src/app/features/Interfaces/author'; 
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl = 'http://localhost:5000/admin'; // Update the base URL

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  getHeaders(): { [header: string]: string } {
    return { "access-token": `${this._AuthenticationService.getToken()}` };
  }

  getAuthors(): Observable<Author[]> {
    const url = `${this.baseUrl}/authors`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Author[]>(url, requestOptions);
  }

  getAuthorById(id: string): Observable<Author> {
    const url = `${this.baseUrl}/author/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.get<Author>(url, requestOptions);
  }

  createAuthor(Author: any): Observable<Author> {
    const url = `${this.baseUrl}/author`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.post<Author>(url, Author, requestOptions);
  }

  updateAuthor(id: string, Author: Author): Observable<Author> {
    const url = `${this.baseUrl}/author/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.put<Author>(url, Author, requestOptions);
  }

  deleteAuthor(id: string): Observable<void> {
    const url = `${this.baseUrl}/author/${id}`; // Use the updated URL
    const requestOptions = { headers: this.getHeaders() };
    return this._HttpClient.delete<void>(url, requestOptions);
  }
}
