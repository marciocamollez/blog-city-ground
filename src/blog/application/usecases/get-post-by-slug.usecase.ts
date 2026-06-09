import {
  Inject,
  Injectable,
  NotFoundException,
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
    const post = await this.postRepository.getPostBySlug(slug);

    if (!post) {
      throw new NotFoundException(`Post with slug '${slug}' not found.`);
    }
    return post;
  }
}