import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  login(dto: LoginDto) {
    if (
      dto.username !== 'admin' ||
      dto.password !== '123456'
    ) {
      throw new UnauthorizedException(
        'Usuário ou senha inválidos',
      );
    }

    const payload = {
      sub: 1,
      username: dto.username,
    };

    return {
      access_token:
        this.jwtService.sign(payload),
    };
  }
}