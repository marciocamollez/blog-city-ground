import { Module } from '@nestjs/common';

import { BlogController } from './blog.controller';

import { GetPostsUsecase } from './application/usecases/get-posts.usecase';
import { GetPostBySlugUsecase } from './application/usecases/get-post-by-slug.usecase';

import { WordpressGateway } from './infra/gateways/wordpress.gateway';

import { POST_REPOSITORY } from './domain/repositories/post-repository.token';

@Module({
  controllers: [BlogController],

  providers: [
    GetPostsUsecase,
    GetPostBySlugUsecase,
    {
      provide: POST_REPOSITORY,
      useClass: WordpressGateway,
    },
  ],
})
export class BlogModule {}