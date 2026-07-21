import { Injectable, Inject } from '@nestjs/common';
import axios from 'axios';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostEntity } from '../../domain/entities/post.entity';
import { CategoryEntity } from '../../domain/entities/category.entity';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class WordpressGateway implements PostRepository{

  private readonly baseUrl: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.baseUrl = this.configService.get<string>('WORDPRESS_API_URL')!;
  }

  async getPosts(
    page: number,
    perPage: number,
    search?: string,
  ): Promise<PostEntity[]> {
    const cacheKey = `posts-${page}-${perPage}-${search ?? ''}`; 
    const cachedPosts =
    await this.cacheManager.get<PostEntity[]>(
      cacheKey,
    );
    if (cachedPosts) {
      return cachedPosts;
    }
    console.log('Consultando WordPress...');
    const response = await axios.get(`${this.baseUrl}/posts/`, {
      params: {
        page,
        per_page: perPage,
        search,
      },
    });

    const posts = response.data.posts.map((post: any) => new PostEntity(
      post.ID,
      post.title,
      post.slug,
      post.excerpt,
    ));

    await this.cacheManager.set(cacheKey, posts);
    return posts;
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