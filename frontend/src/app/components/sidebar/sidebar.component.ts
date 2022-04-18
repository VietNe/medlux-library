import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NbMenuItem } from "@nebular/theme";
import { CategoryService } from "@services/category/category.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  items: NbMenuItem[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      const categoryData = res.data;
      this.items = [
        {
          title: "Danh mục tài liệu",
          expanded: true,

          children: categoryData.map((item) => ({
            title: item.attributes.name,

            pathMatch: "prefix",
            link: `/main/document-list/${item.id}`,
          })),
        },
      ];

      const hasCategories = localStorage.getItem("hasCategories");
      if (categoryData.length && !hasCategories) {
        localStorage.setItem("hasCategories", "true");
        this.router
          .navigateByUrl("/main", { skipLocationChange: true })
          .then(() => {
            setTimeout(() => {
              this.router.navigate([
                "main",
                "document-list",
                categoryData[0].id,
              ]);
            }, 100);
          });
      }
    });
  }
}
