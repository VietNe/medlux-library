import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastService } from "@services/common/toast.service";
import { BaseService } from "@services/http-client/base.service";
import { Router } from "@angular/router";
import { environment } from "@env/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService extends BaseService {
  private authEndpoint = `${environment.API_URL}/auth/local`;
  constructor(
    http: HttpClient,
    toastService: ToastService,
    private router: Router,
  ) {
    super(http, toastService);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
  public login(body: LoginInput): Observable<LoginResponse> {
    return this.post(body, this.authEndpoint);
  }
}
