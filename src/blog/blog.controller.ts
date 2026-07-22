import { Controller, Get, Param, Query } from '@nestjs/common';

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
import { GetPostsDto } from './infra/dtos/get-posts.dto';

import { ApiOperation, ApiQuery, ApiTags, ApiParam } from '@nestjs/swagger';
@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(
    private readonly getPostsUsecase: GetPostsUsecase,
    private readonly getPostBySlugUsecase: GetPostBySlugUsecase,
    private readonly getCategoriesUsecase: GetCategoriesUsecase,
    private readonly getPostsByCategoryUsecase: GetPostsByCategoryUsecase,
  ) {}

  @Get('posts')
  @ApiOperation({ summary: 'Lista todos os posts' })
  @ApiQuery({ name: 'page', required: false, example: 1,})
  @ApiQuery({ name: 'perPage', required: false, example: 10 })
  @ApiQuery({ name: 'search', required: false, example: 'forest' })
  async getPosts(
    @Query() query: GetPostsDto
  ) {
    const posts = await this.getPostsUsecase.execute(query.page, query.perPage, query.search);

    return posts.map(PostPresenter.toHttp);
  }

  @Get('posts/:slug')
  @ApiOperation({ summary: 'Busca um post pelo slug' })
  @ApiParam({ name: 'slug', example: 'a-origem-do-nottingham-forest' })
  async getPostBySlug(
    @Param('slug') slug: string
  ) {
    const post = await this.getPostBySlugUsecase.execute(slug);
    
    return PostPresenter.toHttp(post);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Lista todas as categorias' })
  @ApiParam({ name: 'name', example: 'historia' })
  async getCategories() {
    const categories =
      await this.getCategoriesUsecase.execute();

    return categories.map(
      CategoryPresenter.toHttp,
    );
  }

  @ApiOperation({ summary: 'Lista posts por categoria' })
  @ApiParam({ name: 'id', example: '1' })
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