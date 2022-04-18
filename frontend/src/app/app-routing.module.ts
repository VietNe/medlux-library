import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "@layouts/main-layout/main-layout.component";
import { AuthLayoutComponent } from "@layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "@guards/auth/auth.guard";

const routes: Routes = [
  {
    path: "main",
    component: MainLayoutComponent,
    loadChildren: () =>
      import("@layouts/main-layout/main-layout.module").then(
        (mod) => mod.MainLayoutModule,
      ),
      canActivate: [AuthGuard],
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("@layouts/auth-layout/auth-layout.module").then(
        (mod) => mod.AuthLayoutModule,
      ),
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
