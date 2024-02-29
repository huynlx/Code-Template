export interface IDataTable<T> {
  pageSize: number;
  currentPage: number;
  total: number;
  totalAlt?: number;
  orderBy?: string;
  orderByDirection?: string;
  data: T[];
}
