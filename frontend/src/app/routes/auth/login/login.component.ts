import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Login } from "@redux/actions/auth.action";
import { selectAuthState } from "@redux/app.state";
import { ToastService } from "@services/common/toast.service";
import { TrimValidator } from "app/validators/index.validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public isSubmitted = false;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {
    this.store.select(selectAuthState).subscribe((state) => {
      if (!state["accessToken"]) {
        return;
      } else {
        this.router.navigate(["/main"]);
      }
    });

    this.form = this.fb.group({
      identifier: [
        null,
        [Validators.required, Validators.email, TrimValidator()],
      ],
      password: [null, [Validators.required, TrimValidator()]],
    });
  }

  get emailCtl(): FormControl {
    return this.form.controls["identifier"] as FormControl;
  }

  get pwdCtl(): FormControl {
    return this.form.controls["password"] as FormControl;
  }

  ngOnInit(): void {}

  private login(): void {
    this.store.dispatch(Login({ payload: this.form.value }));
  }

  public onSubmit(): void {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.login();
    }
  }
}
