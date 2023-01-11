import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken,
      },
    });
    return next.handle(req).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err.status == 401) {
            Swal.fire('Your seasson has expired', 'Relogin please!', 'error');
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }
      )
    );
  }
}
