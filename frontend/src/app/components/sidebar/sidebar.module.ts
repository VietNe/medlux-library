import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { NbIconModule, NbMenuModule, NbSidebarModule } from "@nebular/theme";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbMenuModule,
    RouterModule,
    NbIconModule,
  ],
})
export class SidebarModule {}
