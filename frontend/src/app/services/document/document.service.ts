import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import {
  GetDocumentResponse,
  GetDocumentsResponse,
} from "@models/document.model";
import { ToastService } from "@services/common/toast.service";
import { BaseService } from "@services/http-client/base.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DocumentService extends BaseService {
  private documentEndpoint = `${environment.API_URL}/documents`;
  constructor(http: HttpClient, toastService: ToastService) {
    super(http, toastService);
  }

  public getDocumentsByCategoryId(
    categoryId: string,
    page: number,
    itemsPerPage: number,
  ): Observable<GetDocumentsResponse> {
    return this.get<GetDocumentsResponse>(
      `${this.documentEndpoint}?populate=*&filters[categories][id][$eq]=${categoryId}&pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}
      `,
    );
  }

  public getDocumentById(id: string): Observable<GetDocumentResponse> {
    return this.get<GetDocumentResponse>(
      `${this.documentEndpoint}/${id}?populate=*`,
    );
  }
}
