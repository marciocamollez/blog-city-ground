import { PostPresenter } from './post.presenter';
import { PaginatedResult } from '../../domain/interfaces/paginated-result.interface';
import { PostEntity } from '../../domain/entities/post.entity';

export class PaginatedPostsPresenter {
  static toHttp(
    result: PaginatedResult<PostEntity>,
    page: number,
    perPage: number,
  ) {
    return {
      items: result.items.map(PostPresenter.toHttp),
      meta: {
        page,
        perPage,
        total: result.total,
        totalPages: Math.ceil(result.total / perPage),
        hasNext: page * perPage < result.total,
        hasPrevious: page > 1,
      }
    }
  }
}