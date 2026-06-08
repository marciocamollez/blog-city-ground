import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { PostRepository } from "src/blog/domain/repositories/post.repository";
import { POST_REPOSITORY } from "src/blog/domain/repositories/post-repository.token";

@Injectable()
export class GetPostsByCategoryUsecase {
  constructor(
    @Inject(POST_REPOSITORY)
    private readonly repository: PostRepository,
  ) {}

  async execute(categoryId: number) {
    return this.repository.getPostsByCategory(categoryId);
  }
}