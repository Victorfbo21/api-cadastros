import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenService } from './token.service';
import { User } from '../../users/entities/users.entity';
import { LoginRequest } from '../interfaces/auth-login.request.interface';

@Injectable()
export class AuthServices {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private tokenService: TokenService
    ) { }
    async login(data: LoginRequest) {
        const user = await this.userRepository.findOneBy({ email: data.email, password: data.password })

        if (user) {
            const auth = await this.tokenService.getToken(user.id, "user")
            return { user, auth }
        }
        else {
            throw new Error("Usuário Inválido")
        }

    }
}