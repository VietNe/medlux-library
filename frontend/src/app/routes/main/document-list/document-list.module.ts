import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentListComponent } from "./document-list.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentCardItemModule } from "@components/document-card-item/document-card-item.module";
import { DocumentListItemModule } from "@components/document-list-item/document-list-item.module";
import {
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { PaginationModule } from "@components/pagination/pagination.module";

const routes: Routes = [
  {
    path: ":categoryId",
    component: DocumentListComponent,
  },
  {
    path: "**",
    loadChildren: () =>
      import("@routes/not-found/not-found.module").then(
        (mod) => mod.NotFoundModule,
      ),
  },
];

@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    DocumentCardItemModule,
    DocumentListItemModule,
    PaginationModule,
  ],
})
export class DocumentListModule {}
