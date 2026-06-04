import {
  Inject,
  Injectable,
} from '@nestjs/common';

import { PostRepository }
  from '../../domain/repositories/post.repository';

import { POST_REPOSITORY }
  from '../../domain/repositories/post-repository.token';

@Injectable()
export class GetPostBySlugUsecase {
  constructor(
    @Inject(POST_REPOSITORY)
    private readonly postRepository: PostRepository,
  ) {}

  async execute(slug: string) {
    return this.postRepository.getPostBySlug(slug);
  }
}