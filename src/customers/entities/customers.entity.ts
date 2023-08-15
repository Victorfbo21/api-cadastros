import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: string;


    @Column({ length: 500 })
    customerName: string;

    @Column()
    email?: string;

    @Column()
    contato: string;
}