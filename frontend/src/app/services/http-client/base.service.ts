import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastService } from "@services/common/toast.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  private customHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private toastService: ToastService) {}

  get<T = {}>(url: string, options?: any) {
    return this.http.get<T>(url, { ...this.customHeaders, ...options }).pipe(
      map((response) => response),
      this.catchErr(),
    ) as unknown as Observable<T>;
  }

  post<T = {}>(body: any, url: string, options?: any) {
    return this.http
      .post<T>(url, body, { ...this.customHeaders, ...options })
      .pipe(this.catchErr()) as unknown as Observable<T>;
  }

  patch<T = {}>(body: any, url: string, options?: any) {
    return this.http
      .patch<T>(url, { ...body }, { ...this.customHeaders, ...options })
      .pipe(this.catchErr()) as unknown as Observable<T>;
  }

  put<T = {}>(body: any, url: string, options?: any) {
    return this.http
      .put<T>(url, { ...body }, { ...this.customHeaders, ...options })
      .pipe(this.catchErr()) as unknown as Observable<T>;
  }

  delete<T = {}>(url: string, options?: any) {
    return this.http
      .delete<T>(url, { ...this.customHeaders, ...options })
      .pipe(this.catchErr()) as unknown as Observable<T>;
  }

  private catchErr() {
    return catchError((error) => this.handleError(error));
  }

  private handleError({ error }: HttpErrorResponse) {
    const { message, status } = error.error;
    if (message) {
      this.toastService.error(
        status === 400 ? "Email hoặc mật khẩu không đúng" : message,
      );
    }
    return throwError(() => error);
  }
}
