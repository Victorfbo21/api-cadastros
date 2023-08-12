import { AuthController } from './../controllers/auth.controller';
import { Module } from '@nestjs/common'
import { AuthServices } from '../services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../users/entities/users.entity';
import { TokenService } from '../services/token.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthServices, TokenService],
    controllers: [AuthController],
})
export class AuthModule { }