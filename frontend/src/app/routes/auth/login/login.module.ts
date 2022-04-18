import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NbButtonModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbInputModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
  ],
})
export class LoginModule {}
