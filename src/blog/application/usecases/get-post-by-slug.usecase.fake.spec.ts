import { NotFoundException } from '@nestjs/common';

import { GetPostBySlugUsecase } from './get-post-by-slug.usecase';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostEntity } from '../../domain/entities/post.entity';

class FakePostRepository implements PostRepository {
  async getPosts(): Promise<PostEntity[]> {
    return [];
  }

  async getPostBySlug(slug: string): Promise<PostEntity | null> {
    if (slug === 'origem-nottingham') {
      return new PostEntity(
        1,
        'A origem do Nottingham Forest',
        'origem-nottingham',
        'Texto...',
      );
    }

    return null;
  }

  async getCategories(): Promise<any[]> {
    return [];
  }

  async getPostsByCategory(): Promise<PostEntity[]> {
    return [];
  }
}

describe('GetPostBySlugUsecase', () => {
  it('should return a post when slug exists', async () => {
    const repository = new FakePostRepository();

    const usecase = new GetPostBySlugUsecase(repository);

    const post = await usecase.execute('origem-nottingham');

    expect(post).not.toBeNull();
    expect(post.id).toBe(1);
    expect(post.title).toBe('A origem do Nottingham Forest');
    expect(post.slug).toBe('origem-nottingham');
  });

  it('should throw NotFoundException when post does not exist', async () => {
    const repository = new FakePostRepository();

    const usecase = new GetPostBySlugUsecase(repository);

    await expect(
      usecase.execute('post-inexistente'),
    ).rejects.toThrow(NotFoundException);
  });
});