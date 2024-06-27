// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async login(@Body('code') code: string): Promise<{ access_token: string }> {
    const accessToken = await this.authService.exchangeCodeForToken(code);
    return { access_token: accessToken };
  }
}
