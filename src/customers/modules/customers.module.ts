import { Customer } from './../entities/customers.entity';
import { Module } from '@nestjs/common';;
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from '../controllers/customers.controller';
import { CustomersService } from '../services/customers.services';
@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    controllers: [CustomersController],
    providers: [CustomersService],
})
export class CustomersModule { }