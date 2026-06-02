import { PostEntity } from '../../domain/entities/post.entity';

export class PostPresenter {
  static toHttp(post: PostEntity) {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
    };
  }
}