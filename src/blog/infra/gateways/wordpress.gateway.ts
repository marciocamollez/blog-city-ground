import axios from 'axios';
import { PostRepository } from '../../domain/repositories/post.repository';

export class WordpressGateway implements PostRepository{
  private readonly baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/citygroundbrasil.wordpress.com';

  async getPosts(): Promise<any[]> {
    const response = await axios.get(`${this.baseUrl}/posts/`);

    return response.data.posts;
  }
}