import { Controller, Get, Param } from '@nestjs/common';

//Usecases
import { GetPostsUsecase } from './application/usecases/get-posts.usecase';
import { GetPostBySlugUsecase } from './application/usecases/get-post-by-slug.usecase';
import { GetCategoriesUsecase } from './application/usecases/get-categories.usecase';
import { GetPostsByCategoryUsecase } from './application/usecases/get-posts-by-category.usecase';

//Presenters
import { PostPresenter } from './infra/presenters/post.presenter'
import { CategoryPresenter } from './infra/presenters/category.presenter';

//DTOs
import { GetPostsByCategoryDto } from './infra/dtos/get-posts-by-category.dto';


@Controller('blog')
export class BlogController {
  constructor(
    private readonly getPostsUsecase: GetPostsUsecase,
    private readonly getPostBySlugUsecase: GetPostBySlugUsecase,
    private readonly getCategoriesUsecase: GetCategoriesUsecase,
    private readonly getPostsByCategoryUsecase: GetPostsByCategoryUsecase,
  ) {}

  @Get('posts')
  async getPosts() {
    const posts = await this.getPostsUsecase.execute();

    return posts.map(PostPresenter.toHttp);
  }

  @Get('posts/:slug')
  async getPostBySlug(
    @Param('slug') slug: string
  ) {
    const post = await this.getPostBySlugUsecase.execute(slug);
    
    return PostPresenter.toHttp(post);
  }

  @Get('categories')
  async getCategories() {
    const categories =
      await this.getCategoriesUsecase.execute();

    return categories.map(
      CategoryPresenter.toHttp,
    );
  }

  @Get('categories/:id/posts')
  async getPostsByCategory(
    @Param() params: GetPostsByCategoryDto,
  ) {
    const posts =
      await this.getPostsByCategoryUsecase.execute(
        params.id,
      );

    return posts.map(
      PostPresenter.toHttp,
    );
  }
}