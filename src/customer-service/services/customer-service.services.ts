import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import encodePassword from 'src/Utils/encodePassword';
import { CustomerService } from '../entities/customer-service.entity';
import { CustomerServiceRepository } from '../repositories/customer-service.repository';
@Injectable()
export class CustomerServiceService {
    private CustomerServiceRepository;

    public constructor(
        @InjectRepository(CustomerService)
        private defaultCustomerServiceRepository: Repository<CustomerService>,
    ) {
        this.CustomerServiceRepository = new CustomerServiceRepository()
    }

    async insertCustomerService(customerService: CustomerService) {
        if (!customerService.serviceCode || !customerService.personInCharge) throw new BadRequestException("Erro ao gerar novo Atendimento !")
        customerService.initialHour = new Date()
        const newCustomerService = this.defaultCustomerServiceRepository.create(customerService)
        console.log("Atendimento Cadastrado com Sucesso !")
        return this.defaultCustomerServiceRepository.save(newCustomerService)

    }

    async getCustomerServices(filters = {}) {
        if (Object.keys(filters).length > 0) {
            return await this.defaultCustomerServiceRepository.find({ where: filters })
        }
        else {
            return this.defaultCustomerServiceRepository.find()

        }
    }

    async updateCustomerService(id: string, newDate: Partial<CustomerService>) {
        try {
            const findUsertoUpdate = await this.defaultCustomerServiceRepository.findBy({ id: id })
            if (findUsertoUpdate) {
                const updated = await this.defaultCustomerServiceRepository.update(id, newDate)
                console.log("Atendimento Atualizado !!")
                return updated
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }

    async deleteCostumerService(id: number) {
        try {
            const userDeleted = await this.defaultCustomerServiceRepository.delete(id)
            if (userDeleted) {
                console.log("Atendimento Deletado com Sucesso !!")
                return userDeleted
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }

}
