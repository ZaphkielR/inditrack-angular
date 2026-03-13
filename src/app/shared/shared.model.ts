export interface Paginate<T> {
  items: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface MessegeResponse {
  message: string;
}
