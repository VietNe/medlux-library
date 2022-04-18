import { createAction, props } from "@ngrx/store";

export const LOGIN = "[Auth] Login";
export const LOGOUT = "[Auth] Logout";
export const LOGIN_SUCCESS = "[Auth] Login Success";
export const LOGIN_FAILURE = "[Auth] Login Failure";

export const Login = createAction(LOGIN, props<{ payload: LoginInput }>());

export const LogInSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ payload: LoginResponse }>(),
);

export const LogInFailure = createAction(
  LOGIN_FAILURE,
  props<{ error: string }>(),
);

export const Logout = createAction(LOGOUT);

export type All =
  | typeof Login
  | typeof LogInSuccess
  | typeof LogInFailure
  | typeof Logout;
