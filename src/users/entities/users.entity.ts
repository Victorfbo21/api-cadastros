import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;


    @Column({ length: 500 })
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}