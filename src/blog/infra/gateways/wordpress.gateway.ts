import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostEntity } from '../../domain/entities/post.entity';

@Injectable()
export class WordpressGateway implements PostRepository{
  private readonly baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/citygroundbrasil.wordpress.com';

  async getPosts(): Promise<PostEntity[]> {
    const response = await axios.get(`${this.baseUrl}/posts/`);

    return response.data.posts.map((post: any) => new PostEntity(
      post.ID,
      post.title,
      post.slug,
      post.excerpt,
    ));
  }

  async getPostBySlug(
    slug: string,
  ): Promise<PostEntity | null> {
    const response = await axios.get(
      `${this.baseUrl}/posts/slug:${slug}`,
    );

    const post = response.data;

    if (!post || !post.ID) {
      return null;
    }

    return new PostEntity(
      post.ID,
      post.title,
      post.slug,
      post.excerpt,
    );
  }
}