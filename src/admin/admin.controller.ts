import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/enums/role.enum';

@Controller('admin')
export class AdminController {

  @Get('profile')
  @UseGuards(
    JwtAuthGuard, 
    RolesGuard
  )
  @Roles(Role.ADMIN)
  
  profile() {

    return {
      message: 'Área protegida',
    };

  }

}