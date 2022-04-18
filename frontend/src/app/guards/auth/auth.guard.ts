import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { selectAuthState } from "@redux/app.state";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  public accessToken: string = "";
  constructor(private _router: Router, private store: Store<any>) {
    this.store.select(selectAuthState).subscribe((state: any) => {
      this.accessToken = state["accessToken"];
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.accessToken) {
      return true;
    }

    return this._router.createUrlTree([""]);
  }
}
