import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { ServicesService } from '../services/services.service';
import { Service } from '../entities/services.entity';

@Controller('/services')
export class ServicesController {
    constructor(private servicesService: ServicesService
    ) { }

    @Put('/create')
    async insertService(@Body() service: Service): Promise<any> {
        return this.servicesService.insertService(service);
    }

    @Get('/list')
    async getServices() {
        return this.servicesService.getServices();
    }

    @Patch('/update')
    async updateService(@Query() id: string, @Body() newData: Partial<Service>) {
        return this.servicesService.updateService(id, newData)
    }

    @Delete('/delete')
    async deleteService(@Query() id: number) {
        return this.servicesService.deleteService(id)
    }

}
