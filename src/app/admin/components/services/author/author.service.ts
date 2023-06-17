import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Author } from 'src/app/features/Interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:5000/admin/author/';

  constructor(private _HttpClient: HttpClient, private _AuthenticationService: AuthenticationService) { }

  headers = { "access-token": `${this._AuthenticationService.getToken()}` };
  requestOptions = { headers: this.headers };

  getAllUsers(): Observable<Author[]> {
    return this._HttpClient.get<Author[]>(this.apiUrl, this.requestOptions)
  }

  updateAuthor(Author_id: any): Observable<any> {
    return this._HttpClient.post(`${this.apiUrl}${Author_id}`, this.requestOptions);
  }

  deleteAuthor(Author_id: any): Observable<any> {
    return this._HttpClient.delete(`${this.apiUrl}${Author_id}`, this.requestOptions);
  }

}
