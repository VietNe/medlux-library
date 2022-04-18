import { SidebarModule } from "@components/sidebar/sidebar.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderModule } from "@components/header/header.module";
import { NbLayoutModule, NbSidebarModule } from "@nebular/theme";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("@routes/main/main.module").then((mod) => mod.MainModule),
  },
];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    SidebarModule,
    HeaderModule,
    NbSidebarModule,
  ],
})
export class MainLayoutModule {}
