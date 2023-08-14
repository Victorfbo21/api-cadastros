import { Module } from '@nestjs/common';
import { StaffService } from '../services/staff.service';
import { StaffController } from '../controllers/staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from '../entities/staff.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Staff])],
    controllers: [StaffController],
    providers: [StaffService],
})
export class StaffModule { }