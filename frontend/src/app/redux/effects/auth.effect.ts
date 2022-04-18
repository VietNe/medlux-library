import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Login, LogInFailure, LogInSuccess } from "@redux/actions/auth.action";
import { AuthService } from "@services/auth/auth.service";
import { ToastService } from "@services/common/toast.service";

import { exhaustMap, map } from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      exhaustMap((action) => {
        return this.authService.login(action.payload).pipe(
          map((res: LoginResponse) => {
            if (res.jwt) {
              this.toastService.success("Đăng nhập thành công!");
              return LogInSuccess({ payload: res });
            }
            return LogInFailure({ error: "Đăng nhập thất bại!" });
          }),
        );
      }),
    ),
  );
}
