import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DocumentCardItemComponent } from "./document-card-item.component";

@NgModule({
  declarations: [DocumentCardItemComponent],
  exports: [DocumentCardItemComponent],
  imports: [CommonModule],
})
export class DocumentCardItemModule {}
