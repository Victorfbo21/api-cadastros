import { Service } from 'src/services/entities/services.entity';
import { Staff } from 'src/staff/entities/staff.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Customer } from 'src/customers/entities/customers.entity';

enum ServiceStatus {
    WAITING = 'Waiting',
    IN_PROGRESS = 'Progress',
    COMPLETED = 'Completed',
}

@Entity()
export class CustomerService {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: 'varchar',
        default: ServiceStatus.WAITING,
        length: 20
    })
    status: string;

    @Column()
    serviceName: string;

    @Column()
    serviceCode: string;

    @Column()
    personInCharge: string;

    @Column()
    customerName: string;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    initialHour: Date;

}