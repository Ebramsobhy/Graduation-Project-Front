import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/features/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/admin/user/';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  headers = { "access-token": `${this.authenticationService.getToken()}` };
  requestOptions = { headers: this.headers };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, this.requestOptions);
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.apiUrl}${user._id}`;
    return this.http.put(url, user, this.requestOptions);
  }

  deleteUser(user_id: string): Observable<any> {
    const url = `${this.apiUrl}${user_id}`;
    return this.http.delete(url, this.requestOptions);
  }
}
