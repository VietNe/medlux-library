import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { GetCategoriesResponse } from "@models/category.model";
import { ToastService } from "@services/common/toast.service";
import { BaseService } from "@services/http-client/base.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService extends BaseService {
  private categoryEndpoint = `${environment.API_URL}/categories`;
  constructor(http: HttpClient, toastService: ToastService) {
    super(http, toastService);
  }

  public getCategories(): Observable<GetCategoriesResponse> {
    return this.get<GetCategoriesResponse>(this.categoryEndpoint);
  }
}
