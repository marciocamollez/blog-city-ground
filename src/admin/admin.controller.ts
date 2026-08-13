import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin')
export class AdminController {

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile() {

    return {
      message: 'Área protegida',
    };

  }

}