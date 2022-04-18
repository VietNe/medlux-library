import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NbButtonModule, NbIconModule, NbLayoutModule } from "@nebular/theme";
import { AuthLayoutComponent } from "./auth-layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("@routes/auth/auth.module").then((mod) => mod.AuthModule),
  },
];

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
  ],
})
export class AuthLayoutModule {}
