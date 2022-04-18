import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { selectAuthState } from "@redux/app.state";
import { Store } from "@ngrx/store";

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  public accessToken: string = "";
  constructor(private store: Store) {
    this.store.select(selectAuthState).subscribe((state: any) => {
      this.accessToken = state.accessToken;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      setHeaders: {
        Authorization: "Bearer " + this.accessToken,
      },
    });
    return next.handle(newReq);
  }
}
