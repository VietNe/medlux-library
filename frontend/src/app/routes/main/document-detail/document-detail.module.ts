import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NbTabsetModule } from "@nebular/theme";
import { DocumentDetailComponent } from "./document-detail.component";

const routes: Routes = [
  {
    path: ":id",
    component: DocumentDetailComponent,
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
  declarations: [DocumentDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NbTabsetModule],
})
export class DocumentDetailModule {}
