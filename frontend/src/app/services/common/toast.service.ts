import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public success(msg: string) {
    this.toastr.success(msg);
  }

  public error(msg: string) {
    this.toastr.error(msg);
  }
}
