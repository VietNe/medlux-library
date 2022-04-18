import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DocumentData } from "@models/document.model";
import { DocumentService } from "@services/document/document.service";

const FILE_TYPES = "png,pdf,jpg,jpeg,doc,docx,xls,xlsx,zip,txt,ppt,pptx,gif";
@Component({
  selector: "app-document-detail",
  templateUrl: "./document-detail.component.html",
  styleUrls: ["./document-detail.component.scss"],
})
export class DocumentDetailComponent implements OnInit {
  public document!: DocumentData;
  public files: MediaData[] = [];
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param["id"]) {
        const id = param["id"];
        this.documentService.getDocumentById(id).subscribe((res) => {
          this.document = res.data;
          this.files = this.document.attributes.files.data;
        });
      }
    });
  }

  public getFileTypeImage(ext: string): string {
    let type = "file";

    if (FILE_TYPES.includes(this.getFileType(ext))) {
      type = this.getFileType(ext);
    }
    return "assets/icons/" + type + "-type.png";
  }

  public getFileType(ext: string): string {
    return ext.substring(1);
  }

  public getFileSize(size: number): string {
    return (size / 1024).toFixed(2);
  }
}
