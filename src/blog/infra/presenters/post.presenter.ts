import { PostEntity } from '../../domain/entities/post.entity';

export class PostPresenter {
  static toHttp(post: PostEntity) {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      featuredImage: post.featuredImage,
      categories: post.categories.map(category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
      })),
    };
  }
}