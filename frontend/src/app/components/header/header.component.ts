import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Logout } from "@redux/actions/auth.action";
import { AuthService } from "@services/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.store.dispatch(Logout());
    this.authService.logout();
  }
}
