import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { CustomersService } from '../services/customers.services';
import { Customer } from '../entities/customers.entity';
@Controller('/customers')
export class CustomersController {
    constructor(private userService: CustomersService
    ) { }

    @Put('/create')
    async insertCustomer(@Body() customer: Customer): Promise<Customer> {
        return this.userService.insertCustomer(customer);
    }

    @Get('/list')
    async getCustomers() {
        return this.userService.getCustomers();
    }

    @Patch('/update')
    async updateCustomer(@Query() id: string, @Body() newData: Partial<Customer>) {
        return this.userService.updateCustomer(id, newData)
    }

    @Delete('/delete')
    async deleteCustomer(@Query() id: number) {
        return this.userService.deleteCustomer(id)
    }

}
