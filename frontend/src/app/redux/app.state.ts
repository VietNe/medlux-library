import * as auth from "./reducers/auth.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer,
};

export const selectAuthState = createFeatureSelector<auth.State>("auth");
export const selectAuthTokenState = createSelector(
  selectAuthState,
  (s) => s.accessToken,
);
