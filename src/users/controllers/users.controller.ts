import { Body, Controller, Get, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/users.entity';
@Controller('/users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Put('/create')
    insertUser(@Body() user: User): Promise<any> {
        return this.userService.insertUser(user);
    }
}
