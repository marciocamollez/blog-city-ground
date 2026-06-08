import { CategoryEntity } from '../../domain/entities/category.entity';

export class CategoryPresenter {
  static toHttp(category: CategoryEntity) {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
    };
  }
}