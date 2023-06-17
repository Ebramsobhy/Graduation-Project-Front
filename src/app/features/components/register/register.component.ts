import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;
  error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private _Router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      subscribe: [false],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(registerForm: FormGroup) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      this.error = "يوجد خطأ فى البيانات.";
      return;
    }

    const { firstName, lastName, email, password, subscribe } =
      this.registerForm.value;

    // Call the register method of the AuthService to register the user
    this.authService
      .register({ firstName, lastName, email, password, subscribe })
      .subscribe({
        next: (response) => {
          this._Router.navigate(["/login"]);
          // Redirect the user to the login page or show a success message
        },
        error: (error) => {
          this.error = "يوجد خطأ فى البيانات.";
          // Show an error message to the user
        }
      });
  }
}
