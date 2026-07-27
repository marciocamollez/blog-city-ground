import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({
    example: 404,
    description: 'Código HTTP do erro',
  })
  statusCode: number;

  @ApiProperty({
    example: '2026-07-27T20:15:30.000Z',
    description: 'Data e hora em que o erro ocorreu',
  })
  timestamp: string;

  @ApiProperty({
    example: '/blog/posts/post-inexistente',
    description: 'Rota da requisição',
  })
  path: string;

  @ApiProperty({
    example: 'Post não encontrado',
    description: 'Mensagem de erro',
  })
  message: string;
}