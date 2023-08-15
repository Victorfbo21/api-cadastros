import { Customer } from './../entities/customers.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersRepository } from '../repositories/customers.repository';

@Injectable()
export class CustomersService {
    private CustomerRepository;

    public constructor(
        @InjectRepository(Customer)
        private defaultCustomersRepository: Repository<Customer>,
    ) {
        this.CustomerRepository = new CustomersRepository()
    }

    async insertCustomer(customer: Customer) {
        if (!customer.customerName || !customer.contato) throw new BadRequestException("Nome do Cliente Devem ser preenchidos!")
        const checkExistence = await this.defaultCustomersRepository.find({ where: customer })
        if (checkExistence.length != 0) {
            throw new BadRequestException("Cliente Ja cadastrado !")
        }
        else {
            const newUser = this.defaultCustomersRepository.create(customer)
            console.log("Cliente Cadastrado com Sucesso !")
            return this.defaultCustomersRepository.save(newUser)
        }
    }

    async getCustomers() {
        const customers = await this.defaultCustomersRepository.find()
        if (!customers) {
            throw new Error("Nenhum Cliente Cadastrado")
        }
        return customers
    }

    async updateCustomer(id: string, newDate: Partial<Customer>) {
        try {
            const findUsertoUpdate = await this.defaultCustomersRepository.findBy({ id: id })
            if (findUsertoUpdate) {
                const updated = this.defaultCustomersRepository.update(id, newDate)
                console.log("Cliente Atualizado !!")
                return updated
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }

    async deleteCustomer(id: number) {
        try {
            const userDeleted = await this.defaultCustomersRepository.delete(id)
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
