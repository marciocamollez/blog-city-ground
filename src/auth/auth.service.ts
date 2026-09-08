import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Role } from './enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  login(dto: LoginDto) {
    const users = [
      {
        id: 1,
        username: 'admin',
        password: '123456',
        role: Role.ADMIN,
      },
      {
        id: 2,
        username: 'editor',
        password: '123456',
        role: Role.EDITOR,
      },
    ];

    const user = users.find(
      (user) =>
        user.username === dto.username &&
        user.password === dto.password,
    );

    if (!user) {
      throw new UnauthorizedException(
        'Usuário ou senha inválidos',
      );
    }

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}