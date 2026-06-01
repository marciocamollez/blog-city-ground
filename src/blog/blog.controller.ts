import { Controller, Get } from '@nestjs/common';
import { WordpressGateway } from './infra/gateways/wordpress.gateway';

@Controller('blog')
export class BlogController {
  private readonly wordpressGateway = new WordpressGateway();

  @Get('posts')
  async getPosts() {
    return this.wordpressGateway.getPosts();
  }
}