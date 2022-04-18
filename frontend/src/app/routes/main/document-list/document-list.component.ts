import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITEMS_PER_PAGE } from "@components/pagination/pagination.component";
import { DocumentData } from "@models/document.model";
import { DocumentService } from "@services/document/document.service";

@Component({
  selector: "app-document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.scss"],
})
export class DocumentListComponent implements OnInit {
  public displayListType = "list";

  public items: DocumentData[] = [];
  public documents: DocumentData[] = [];

  public searchStr = "";

  // Pagination
  public currentPage = 1;
  public totalItems = 0;
  public itemsPerPage = 6;

  public categoryId = "";

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param["categoryId"]) {
        this.categoryId = param["categoryId"];
        this.getDocuments();
      }
    });
  }

  public getDocuments(): void {
    this.documentService
      .getDocumentsByCategoryId(
        this.categoryId,
        this.currentPage,
        this.itemsPerPage,
      )
      .subscribe((res) => {
        this.documents = res.data;
        this.items = this.documents;
        this.totalItems = res.meta.pagination.total;
      });
  }

  public pagination(event: number): void {
    this.currentPage = event;
    this.getDocuments();
  }

  public onSearch(event: any): void {
    let term = event.target.value;
    term = term.trim().toLowerCase();
    const isMatch = (rs: any) =>
      JSON.stringify(rs).toLowerCase().includes(term);
    if (term == "") {
      this.items = this.documents;
    }
    this.items = this.documents.filter((item) =>
      isMatch(`${item.attributes.title}`),
    );
  }

  public clearSearch(): void {
    this.items = this.documents;
    this.searchStr = "";
  }

  public onChangeDisplayMode(type: string): void {
    if (type === "grid") this.itemsPerPage = 12;
    if (type === "list") this.itemsPerPage = 6;
    this.displayListType = type;
    this.currentPage = 1;
    this.getDocuments();
  }
}
