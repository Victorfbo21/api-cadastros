import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicesRepository } from '../repositories/services.repository';
import { Service } from '../entities/services.entity';
@Injectable()
export class ServicesService {
    private ServicesRepository;

    public constructor(
        @InjectRepository(Service)
        private defaultServicesRepository: Repository<Service>,
    ) {
        this.ServicesRepository = new ServicesRepository()
    }

    async insertService(service: Service) {
        if (!service.serviceName || !service.valor) throw new BadRequestException("Nome e valor Devem ser preenchidos!")
        const checkExistence = await this.defaultServicesRepository.find({ where: service })
        if (checkExistence.length != 0) {
            throw new BadRequestException("Funcionário Ja cadastrado !")
        }
        else {
            const newUser = this.defaultServicesRepository.create(service)
            console.log("Funcionário Cadastrado com Sucesso !")
            return this.defaultServicesRepository.save(newUser)
        }
    }

    async getServices() {
        return this.defaultServicesRepository.find()
    }

    async updateService(id: string, newDate: Partial<Service>) {
        try {
            const findUsertoUpdate = await this.defaultServicesRepository.findBy({ id: id })
            if (findUsertoUpdate) {
                const updated = this.defaultServicesRepository.update(id, newDate)
                console.log("Usuário Atualizado !!")
                return updated
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }

    async deleteService(id: number) {
        try {
            const userDeleted = await this.defaultServicesRepository.delete(id)
            if (userDeleted) {
                console.log("Usuário Deletado com Sucesso !!")
                return userDeleted
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }
}
