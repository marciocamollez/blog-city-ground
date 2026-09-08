import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Role } from '../auth/enums/role.enum';

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