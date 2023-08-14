import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: string;


    @Column({ length: 500 })
    name: string;

    @Column()
    contato: string;

    @Column()
    servico: string;

}