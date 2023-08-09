import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '../repositories/users.repository';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
    private UserRepository;

    public constructor(
        @InjectRepository(User)
        private defaultUsersRepository: Repository<User>,
    ) {
        this.UserRepository = new UserRepository()
    }

    async insertUser(user: User) {
        if (!user.email || !user.name) throw new BadRequestException("Email e senha Devem ser preenchidos!")
        const checkExistence = await this.defaultUsersRepository.find({ where: user })
        if (checkExistence.length != 0) {
            throw new BadRequestException("Usuário Ja cadastrado !")
        }
        else {
            const newUser = this.defaultUsersRepository.create(user)
            console.log("Usuário Cadastrado com Sucesso !")
            return this.defaultUsersRepository.save(newUser)
        }
    }

    async getUsers() {
        return this.defaultUsersRepository.find()
    }

    async updateUser(id: number, newDate: Partial<User>) {
        try {
            const findUsertoUpdate = await this.defaultUsersRepository.findBy({ id: id })
            if (findUsertoUpdate) {
                const updated = this.defaultUsersRepository.update(id, newDate)
                console.log("Usuário Atualizado !!")
                return updated
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }
}
