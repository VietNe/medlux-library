import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "document-list",
    loadChildren: () =>
      import("./document-list/document-list.module").then(
        (mod) => mod.DocumentListModule,
      ),
  },
  {
    path: "document-detail",
    loadChildren: () =>
      import("./document-detail/document-detail.module").then(
        (mod) => mod.DocumentDetailModule,
      ),
  },
  // {
  //   path: "**",
  //   loadChildren: () =>
  //     import("@routes/not-found/not-found.module").then(
  //       (mod) => mod.NotFoundModule,
  //     ),
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
