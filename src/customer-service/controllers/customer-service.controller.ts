import { CustomerService } from './../entities/customer-service.entity';
import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { CustomerServiceService } from '../services/customer-service.services';

@Controller('/customer-service')
export class CustomerServiceController {
    constructor(private staffService: CustomerServiceService
    ) { }

    @Put('/create')
    async insertCustomerService(@Body() customerService: CustomerService): Promise<CustomerService> {
        return this.staffService.insertCustomerService(customerService);
    }

    @Get('/list')
    async getCustomerServices(@Query() filters: Partial<CustomerService>) {
        return this.staffService.getCustomerServices(filters);
    }

    @Patch('/update')
    async updateCustomerService(@Query() id: string, @Body() newData: Partial<CustomerService>) {
        return this.staffService.updateCustomerService(id, newData)
    }

    @Delete('/delete')
    async deleteCustomerService(@Query() id: number) {
        return this.staffService.deleteCostumerService(id)
    }

}
