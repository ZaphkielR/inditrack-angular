export interface PaginateInterface<T> {
    items: Array<T>;
    total: number;
    page: number;
    limit: number;
}
