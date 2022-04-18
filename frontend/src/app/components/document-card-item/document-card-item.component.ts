import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DocumentData } from "@models/document.model";

@Component({
  selector: "app-document-card-item",
  templateUrl: "./document-card-item.component.html",
  styleUrls: ["./document-card-item.component.scss"],
})
export class DocumentCardItemComponent implements OnInit {
  @Input() document!: DocumentData;

  public coverImage = "";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.coverImage = this.document.attributes.coverImage.data.attributes.url;
  }

  public openDocumentDetail(): void {
    this.router.navigate(["main", "document-detail", this.document.id]);
  }
}
