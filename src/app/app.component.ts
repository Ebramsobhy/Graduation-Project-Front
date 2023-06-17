import { Component } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';
import { User } from './features/Interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caricature_Website_Front';
  isAdmin: boolean = false; // Set this flag based on the user role or authentication status
  isLogged: boolean = false;
  user?: User;

  constructor(private _Authentication: AuthenticationService) {
    this._Authentication.currentLogUser.subscribe((response) => {
      if (this._Authentication.currentLogUser.getValue().email === "") {
        this.isLogged = false;
        this.isAdmin = false;
        this.user = undefined;
      } else {
        this.isLogged = true;
        this.isAdmin = this._Authentication.currentLogUser.getValue().is_admin;
        this.user = this._Authentication.currentLogUser.value;
      }
    });
  }
}
