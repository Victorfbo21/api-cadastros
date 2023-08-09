import { Body, Controller, Get, Put, Post, Query, Patch } from '@nestjs/common';
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

    @Get('/list')
    async getUsers() {
        return this.userService.getUsers();
    }

    @Patch('/update')
    async updateUser(@Query() id: number, @Body() newData: Partial<User>) {
        return this.userService.updateUser(id, newData)
    }
}
