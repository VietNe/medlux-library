import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentListItemComponent } from "@components/document-list-item/document-list-item.component";

@NgModule({
  declarations: [DocumentListItemComponent],
  exports: [DocumentListItemComponent],
  imports: [CommonModule],
})
export class DocumentListItemModule {}
