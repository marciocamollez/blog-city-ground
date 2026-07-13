import { PostRepository } from '../../domain/repositories/post.repository';
import { POST_REPOSITORY } from '../../domain/repositories/post-repository.token';
import {
  Inject,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class GetPostsUsecase {
  constructor(
    @Inject(POST_REPOSITORY) 
    private readonly postRepository: PostRepository
  ) {}

  async execute(
    page: number,
    perPage: number,
    search?: string,
  ) {
    return await this.postRepository.getPosts(page, perPage, search);
  }
}