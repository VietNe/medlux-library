export interface Document extends Attributes {
  title: string;
  shortDescription: string;
  longDescription: string;
  origin: string;
  author: string;
  publishedDate: string;
  files: MultipleMedia;
  coverImage: Media;
}
// Category

export interface GetDocumentsResponse extends APIResponse {
  data: DocumentData[];
}
export interface GetDocumentResponse extends APIResponse {
  data: DocumentData;
}

export interface DocumentData extends Data {
  attributes: Document;
}
