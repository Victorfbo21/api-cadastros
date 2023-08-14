import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { StaffService } from '../services/staff.service';
import { Staff } from '../entities/staff.entity';

@Controller('/staff')
export class StaffController {
    constructor(private staffService: StaffService
    ) { }

    @Put('/create')
    async insertUser(@Body() staff: Staff): Promise<any> {
        return this.staffService.insertStaff(staff);
    }

    @Get('/list')
    async getUsers() {
        return this.staffService.getStaffs();
    }

    @Patch('/update')
    async updateUser(@Query() id: string, @Body() newData: Partial<Staff>) {
        return this.staffService.updateStaff(id, newData)
    }

    @Delete('/delete')
    async deleteUser(@Query() id: number) {
        return this.staffService.deleteStaff(id)
    }

}
