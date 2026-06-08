import { PostEntity } from "../entities/post.entity";
import { CategoryEntity } from "../entities/category.entity";

export abstract class PostRepository {
  abstract getPosts(): Promise<any[]>;
  abstract getPostBySlug(slug: string): Promise<PostEntity | null>;

  abstract getCategories(): Promise<CategoryEntity[]>;
  abstract getPostsByCategory(categoryId: number): Promise<PostEntity[]>;
}