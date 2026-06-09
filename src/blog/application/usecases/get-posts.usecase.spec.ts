import { GetPostsUsecase } from './get-posts.usecase';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostEntity } from '../../domain/entities/post.entity';

class FakePostRepository implements PostRepository {
  async getPosts(): Promise<PostEntity[]> {
    return [
      new PostEntity(
        1,
        'A origem do Nottingham Forest',
        'a-origem-do-nottingham-forest',
        'Texto sobre a origem do clube',
      ),
    ];
  }

  async getPostBySlug(): Promise<PostEntity | null> {
    return null;
  }

  async getCategories(): Promise<any[]> {
    return [];
  }

  async getPostsByCategory(): Promise<PostEntity[]> {
    return [];
  }
}

describe('GetPostsUsecase', () => {
  it('should return posts', async () => {
    const fakeRepository = new FakePostRepository();

    const usecase = new GetPostsUsecase(fakeRepository);

    const posts = await usecase.execute();

    expect(posts).toHaveLength(1);
    expect(posts[0].title).toBe('A origem do Nottingham Forest');
  });
});