interface LoginInput {
  identifier: string;
  password: string;
}

interface LoginResponse {
  jwt: string;
}

interface LoggedUser {
  accessToken: string;
}

interface APIResponse {
  meta: Meta;
}

interface Data {
  id: number;
}
interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface Media {
  data: {
    attributes: MediaAttributes;
  };
}

interface MultipleMedia {
  data: MediaData[];
}

interface MediaData {
  id: number;
  attributes: MediaAttributes;
}
interface MediaAttributes {
  ext: string;
  url: string;
  name: string;
  width: number;
  height: number;
  size: number;
}
