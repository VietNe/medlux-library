import { createReducer, on } from "@ngrx/store";
import {
  All,
  LogInFailure,
  LogInSuccess,
  Logout,
} from "@redux/actions/auth.action";

export interface State {
  accessToken: string;
}

export const initialState: LoggedUser = {
  accessToken: "",
};

const _authReducer = createReducer(
  initialState,
  on(LogInSuccess, (state, action) => {
    return {
      ...state,
      accessToken: action.payload.jwt,
    };
  }),
  on(LogInFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(Logout, (state) => {
    return {
      ...state,
      accessToken: "",
    };
  }),
);

export function reducer(state = initialState, action: All) {
  return _authReducer(state, action);
}
