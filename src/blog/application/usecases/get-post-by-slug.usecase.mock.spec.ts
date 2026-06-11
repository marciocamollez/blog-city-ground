import { NotFoundException } from '@nestjs/common';

import { GetPostBySlugUsecase } from './get-post-by-slug.usecase';
import { PostEntity } from '../../domain/entities/post.entity';

describe('GetPostBySlugUsecase using mocks', () => {
  it('should return a post', async () => {
    const repository = {
      getPostBySlug: jest.fn(),
    };

    repository.getPostBySlug.mockResolvedValue(
      new PostEntity(
        1,
        'A origem do Nottingham Forest',
        'origem-nottingham',
        'Texto...',
      ),
    );

    const usecase = new GetPostBySlugUsecase(
      repository as any,
    );

    const post = await usecase.execute(
      'origem-nottingham',
    );

    expect(post.title)
      .toBe('A origem do Nottingham Forest');

    expect(
      repository.getPostBySlug,
    ).toHaveBeenCalledWith(
      'origem-nottingham',
    );
  });

  it('should throw NotFoundException', async () => {
    const repository = {
      getPostBySlug: jest.fn(),
    };

    repository.getPostBySlug.mockResolvedValue(
      null,
    );

    const usecase = new GetPostBySlugUsecase(
      repository as any,
    );

    await expect(
      usecase.execute(
        'post-inexistente',
      ),
    ).rejects.toThrow(
      NotFoundException,
    );
  });
});