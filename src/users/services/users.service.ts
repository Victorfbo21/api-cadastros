import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '../repositories/users.repository';
import { User } from '../entities/users.entity';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private usersRepository: UserRepository,
    ) { }

    async insertUser(user: User) {
        if (!user.email || !user.name) throw new BadRequestException("Email e senha Devem ser preenchidos!")
        return this.usersRepository.createUser(user)
    }
}
