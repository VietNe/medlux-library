import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.ngxSpinnerService.show();

    return next.handle(request).pipe(
      finalize(() => {
        this.ngxSpinnerService.hide();
      }),
    );
  }
}
