import { Body, Controller, Get, Put, Post, Query, Patch, Delete } from '@nestjs/common';
import { StaffService } from '../services/staff.service';
import { Staff } from '../entities/staff.entity';

@Controller('/staff')
export class StaffController {
    constructor(private staffService: StaffService
    ) { }

    @Put('/create')
    async insertStaff(@Body() staff: Staff): Promise<Staff> {
        return this.staffService.insertStaff(staff);
    }

    @Get('/list')
    async getStaffs() {
        return this.staffService.getStaffs();
    }

    @Patch('/update')
    async updateStaff(@Query() id: string, @Body() newData: Partial<Staff>) {
        return this.staffService.updateStaff(id, newData)
    }

    @Delete('/delete')
    async deleteStaff(@Query() id: number) {
        return this.staffService.deleteStaff(id)
    }

}
