import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/features/Interfaces/user';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:5000';
  private token?: any;

  constructor(private http: HttpClient, private _Router: Router) {
    if (localStorage.getItem("token") != null) this.detachToken();
  }

  currentLogUser = new BehaviorSubject<User>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    is_admin: false
  });


  login(userInfo: FormData): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/login`, userInfo);
  }

  detachToken() {
    this.token = localStorage.getItem("token");
    this.currentLogUser.next(jwtDecode(this.token));
  }


  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentLogUser.next({
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      is_admin: false
    });
    localStorage.removeItem("token");
    this._Router.navigate(["/login"]);
  }


  isLoggedIn(): boolean {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = currentUserString
      ? JSON.parse(currentUserString)
      : null;

    return !!currentUser;
  }


  register(formData: any): Observable<any> {
    console.log(formData);

    return this.http.post<any>(`${this.baseUrl}/register`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }


  getToken(): any {
    const currentUserString = localStorage.getItem('token');
    return currentUserString;
  }
}
