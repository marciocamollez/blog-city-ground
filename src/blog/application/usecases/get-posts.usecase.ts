import { PostRepository } from '../../domain/repositories/post.repository';

export class GetPostsUsecase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute() {
    return await this.postRepository.getPosts();
  }
}