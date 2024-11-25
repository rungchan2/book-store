export interface Book {
  id: number;
  title: string;
  image: number;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface IBookDetail extends Book {
  category_name: string;
  liked: boolean;
}

export interface BookDetailResponse {
  message: string;
  results: IBookDetail[];
}

export interface Review {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}
