import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "@components/header/header.component";
import { NbActionsModule } from "@nebular/theme";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, NbActionsModule],
})
export class HeaderModule {}
