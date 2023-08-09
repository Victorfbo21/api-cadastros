import { Body, Controller, Get, Put, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/users.entity';
@Controller('/users')
export class UsersController {
    constructor(private userService: UsersService
    ) { }

    @Put('/create')
    async insertUser(@Body() user: User): Promise<any> {
        return this.userService.insertUser(user);
    }
}
