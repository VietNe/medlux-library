export interface Category extends Attributes {
  name: string;
  description: string;
}
// Category

export interface GetCategoriesResponse extends APIResponse {
  data: GetCategoriesData[];
}

interface GetCategoriesData extends Data {
  attributes: Category;
}
