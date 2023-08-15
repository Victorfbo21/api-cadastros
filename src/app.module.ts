import { Module } from '@nestjs/common';
import { UsersModule } from './users/modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/modules/auth.module';
import { StaffModule } from './staff/modules/staff.module';
import { ServicesModule } from './services/modules/services.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt(`${process.env.DB_PORT}`),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
    }),
    UsersModule,
    AuthModule,
    StaffModule,
    ServicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
