import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('Auth (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('deve retornar um token quando o login for válido', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      });

    expect(response.status).toBe(201);
    expect(response.body.access_token).toBeDefined();
  });

  it('deve retornar 401 para credenciais inválidas', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'admin',
        password: 'errada',
      });

    expect(response.status).toBe(401);
  });

  it('deve retornar 401 quando o token não for enviado', async () => {
    const response = await request(app.getHttpServer())
      .get('/admin/profile');

    expect(response.status).toBe(401);
  });

  it('deve retornar 401 quando o token for inválido', async () => {
    const response = await request(app.getHttpServer())
      .get('/admin/profile')
      .set('Authorization', 'Bearer token-invalido');

    expect(response.status).toBe(401);
  });


  it('deve acessar uma rota protegida com um token válido', async () => {
    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      });

    expect(login.status).toBe(201);
    expect(login.body.access_token).toBeDefined();

    const token = login.body.access_token;

    const response = await request(app.getHttpServer())
      .get('/admin/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Área protegida');
  });

});