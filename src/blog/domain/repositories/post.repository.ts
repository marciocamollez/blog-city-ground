import { PostEntity } from "../entities/post.entity";
import { CategoryEntity } from "../entities/category.entity";
import { PaginatedResult } from "../interfaces/paginated-result.interface";
export abstract class PostRepository {
  abstract getPosts(
    page: number,
    perPage: number,
    search?: string,
  ): Promise<PaginatedResult<PostEntity>>;
  abstract getPostBySlug(slug: string): Promise<PostEntity | null>;

  abstract getCategories(): Promise<CategoryEntity[]>;
  abstract getPostsByCategory(categoryId: number): Promise<PostEntity[]>;
}