import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from '../entities/customer-service.entity';
import { CustomerServiceController } from '../controllers/customer-service.controller';
import { CustomerServiceService } from '../services/customer-service.services';
@Module({
    imports: [TypeOrmModule.forFeature([CustomerService])],
    controllers: [CustomerServiceController],
    providers: [CustomerServiceService],
})
export class CustomerServiceModule { }