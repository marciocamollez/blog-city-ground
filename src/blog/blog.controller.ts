import { Controller, Get } from '@nestjs/common';
import { GetPostsUsecase } from './application/usecases/get-posts.usecase';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly getPostsUsecase: GetPostsUsecase,
  ) {}

  @Get('posts')
  async getPosts() {
    return this.getPostsUsecase.execute();
  }
}