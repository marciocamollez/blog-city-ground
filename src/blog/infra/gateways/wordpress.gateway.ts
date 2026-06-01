import axios from 'axios';

export class WordpressGateway {
  private readonly baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/citygroundbrasil.wordpress.com';

  async getPosts() {
    const response = await axios.get(`${this.baseUrl}/posts/`);

    return response.data.posts;
  }
}