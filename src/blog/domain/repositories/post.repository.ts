export abstract class PostRepository {
  abstract getPosts(): Promise<any[]>;
}