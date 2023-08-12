import { AuthServices } from '../services/auth.service';
import { Body, Controller, BadRequestException, Post } from '@nestjs/common';
import { User } from '../../users/entities/users.entity'
import { LoginRequest } from '../interfaces/auth-login.request.interface';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthServices) { }

    @Post('/login')
    create(@Body() user: LoginRequest) {
        if (!user.email || !user.password) throw new BadRequestException("Email e senha precisam ser preenchidos...");
        return this.authService.login(user);
    }

}


