import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostEntity } from '../../domain/entities/post.entity';
import { CategoryEntity } from '../../domain/entities/category.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WordpressGateway implements PostRepository{

  private readonly baseUrl: string;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('WORDPRESS_API_URL')!;
  }

  async getPosts(
    page: number,
    perPage: number,
    search?: string,
  ): Promise<PostEntity[]> {
    const response = await axios.get(`${this.baseUrl}/posts/`, {
      params: {
        page,
        per_page: perPage,
        search,
      },
    });

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

  async getCategories(): Promise<CategoryEntity[]> {
    const response = await axios.get(`${this.baseUrl}/categories`);

    return response.data.categories.map((category: any) => new CategoryEntity(
      category.ID,
      category.name,
      category.slug,
    ));
  }

  async getPostsByCategory(categoryId: number): Promise<PostEntity[]> {
    const response = await axios.get(`${this.baseUrl}/posts/?category=${categoryId}`);

    return response.data.posts.map((post: any) => new PostEntity(
      post.ID,
      post.title,
      post.slug,
      post.excerpt,
    ));
  }
}