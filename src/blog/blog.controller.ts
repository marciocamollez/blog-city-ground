import { Controller, Get } from '@nestjs/common';
import { GetPostsUsecase } from './application/usecases/get-posts.usecase';
import { PostPresenter } from './infra/presenters/post.presenter'

@Controller('blog')
export class BlogController {
  constructor(
    private readonly getPostsUsecase: GetPostsUsecase,
  ) {}

  @Get('posts')
  async getPosts() {
    const posts = await this.getPostsUsecase.execute();

    return posts.map(PostPresenter.toHttp);
  }
}