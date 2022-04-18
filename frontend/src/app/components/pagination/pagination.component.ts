import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
export const ITEMS_PER_PAGE = 12;
@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() itemsPerPage = ITEMS_PER_PAGE;

  @Output() onPageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public pageChange(event: number): void {
    this.onPageChange.emit(event);
  }
}
