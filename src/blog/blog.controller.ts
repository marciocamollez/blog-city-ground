import { Controller, Get, Param } from '@nestjs/common';
import { GetPostsUsecase } from './application/usecases/get-posts.usecase';
import { GetPostBySlugUsecase } from './application/usecases/get-post-by-slug.usecase';
import { PostPresenter } from './infra/presenters/post.presenter'

@Controller('blog')
export class BlogController {
  constructor(
    private readonly getPostsUsecase: GetPostsUsecase,
    private readonly getPostBySlugUsecase: GetPostBySlugUsecase,
  ) {}

  @Get('posts')
  async getPosts() {
    const posts = await this.getPostsUsecase.execute();

    return posts.map(PostPresenter.toHttp);
  }

  @Get('posts/:slug')
  async getPostBySlug(
    @Param('slug') slug: string
  ) {
    const post = await this.getPostBySlugUsecase.execute(slug);
    
    return PostPresenter.toHttp(post);
  }
}