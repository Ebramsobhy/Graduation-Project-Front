import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  error?: String;
  loginForm!: FormGroup;
  submitted = false;
  user?: any;
  show = false;
  passwd!: string;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _Authentication: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    this.passwd = "password";
  }

  onSubmit(loginForm: FormGroup) {
    if (this.loginForm.invalid) {
      return;
    }
    this._Authentication.login(loginForm.value).subscribe({
      next: (response: any) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        localStorage.setItem("token", response.token);

        this._Authentication.detachToken();

        this.user = this._Authentication.currentLogUser.value;
        console.log(this.user);
        
        if (this.user.is_admin == true) {
          this.router.navigate(["/admin-dashboard"]);
        } else {
          this.router.navigate(["/"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.submitted = true;
  }



}
