import { ApiProperty } from '@nestjs/swagger';
import { CategoryResponse } from './category.response';

export class PostResponse {
  @ApiProperty({
    example: 123,
    description: 'Identificador do post',
  })
  id: number;

  @ApiProperty({
    example: 'A origem do Nottingham Forest',
  })
  title: string;

  @ApiProperty({
    example: 'a-origem-do-nottingham-forest',
  })
  slug: string;

  @ApiProperty({
    example: 'Primeiro clube campeão inglês...',
  })
  excerpt: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  date: string;

  @ApiProperty({ nullable: true })
  featuredImage: string | null;

  @ApiProperty({ type: () => CategoryResponse, isArray: true })
  categories: CategoryResponse[];
}