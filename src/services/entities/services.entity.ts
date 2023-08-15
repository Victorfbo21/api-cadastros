import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Staff } from 'src/staff/entities/staff.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: string;


    @Column({ length: 500 })
    serviceName: string;

    @Column()
    valor: string;
}