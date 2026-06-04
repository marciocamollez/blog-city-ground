import { PostEntity } from "../entities/post.entity";

export abstract class PostRepository {
  abstract getPosts(): Promise<any[]>;
  abstract getPostBySlug(slug: string): Promise<PostEntity | null>;
}