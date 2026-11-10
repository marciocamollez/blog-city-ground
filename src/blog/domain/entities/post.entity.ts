import { CategoryEntity } from './category.entity';
export class PostEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly slug: string,
    public readonly excerpt: string,
    public readonly content = '',
    public readonly date = '',
    public readonly featuredImage: string | null = null,
    public readonly categories: CategoryEntity[] = [],
  ) {}
}