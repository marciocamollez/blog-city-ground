import { Controller, Get } from '@nestjs/common';
import { GetPostsUsecase } from './application/usecases/get-posts.usecase';
import { WordpressGateway } from './infra/gateways/wordpress.gateway';

@Controller('blog')
export class BlogController {
  private readonly wordpressGateway = new WordpressGateway();

  private readonly getPostsUseCase = new GetPostsUsecase(this.wordpressGateway);

  @Get('posts')
  async getPosts() {
    return this.getPostsUseCase.execute();
  }
}