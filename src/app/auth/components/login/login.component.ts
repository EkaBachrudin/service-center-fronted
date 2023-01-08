import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;
  role = [];

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit(): void {
    this.token.removeToken();
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        let roles = JSON.parse(localStorage.getItem('roles') || '{}');
        this.authState.setAuthState(true);
        this.loginForm.reset();

        roles.map((data: any) => {
          switch (data.id) {
            case 2:
              this.router.navigate(['/admin']);
              break;

            case 3:
              this.router.navigate(['/user']);
              break;

            default:
              this.token.removeToken();
              this.router.navigate(['/login']);
              break;
          }
        });
      }
    );
  }

  responseHandler(data: any) {
    this.token.handleData(data);
  }
}
