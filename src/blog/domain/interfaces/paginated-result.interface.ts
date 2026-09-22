import { PostEntity } from '../entities/post.entity';

export interface PaginatedResult<T> {
  items: T[];
  total: number;
}