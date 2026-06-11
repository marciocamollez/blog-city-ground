import axios from 'axios';

import { WordpressGateway } from './wordpress.gateway';
import { PostEntity } from '../../domain/entities/post.entity';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WordpressGateway', () => {
  it('should return posts from wordpress api', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        posts: [
          {
            ID: 1,
            title: 'A origem do Nottingham Forest',
            slug: 'a-origem-do-nottingham-forest',
            excerpt: 'Texto sobre a origem do clube',
          },
        ],
      },
    });

    const gateway = new WordpressGateway();

    const posts = await gateway.getPosts();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://public-api.wordpress.com/rest/v1.1/sites/citygroundbrasil.wordpress.com/posts/',
    );

    expect(posts).toHaveLength(1);
    expect(posts[0]).toBeInstanceOf(PostEntity);
    expect(posts[0].title).toBe('A origem do Nottingham Forest');
  });
});