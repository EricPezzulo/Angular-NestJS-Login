import { Component, inject, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ToastComponent } from '../toast/toast.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    ToastComponent,
    RouterOutlet,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, [Validators.required]),
  });

  userLoggedIn: { username: string } = { username: '' };
  validationError: boolean = false;
  incorrectCredentials: boolean = false;

  user: UserService = inject(UserService);

  @ViewChild(ToastComponent) toast!: ToastComponent;

  constructor(private http: HttpClient, private router: Router) {}

  inputChange() {
    this.incorrectCredentials = false;
  }
  onSubmit() {
    interface Response {
      firstName: string;
      lastName: string;
      profilePicture: string;
      username: string;
      password: string;
    }
    this.http
      .post<Response>('http://localhost:3000/api/login', this.loginForm.value)
      .subscribe((user: Response) => {
        if (user) {
          console.log(user);

          this.userLoggedIn.username = user.username;
          this.user.setUser(user);
          this.incorrectCredentials = false;
          this.toast.toggle();
          this.loginForm.reset();

          this.router.navigate(['/welcome']);
        } else {
          this.loginForm.reset();
          this.incorrectCredentials = true;
        }
      });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
