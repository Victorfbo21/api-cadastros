import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Service } from 'src/services/entities/services.entity';
@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: string;


    @Column({ length: 500 })
    name: string;

    @Column()
    contato: string;

    @ManyToOne(() => Service, (Service) => Service.id)
    @JoinColumn({ name: 'servico_id' })
    servico: Service;

}