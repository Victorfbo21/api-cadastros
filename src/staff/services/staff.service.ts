import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffRepository } from '../repositories/staff.repository';
import { Staff } from '../entities/staff.entity';
import encodePassword from 'src/Utils/encodePassword';
@Injectable()
export class StaffService {
    private StaffRepository;

    public constructor(
        @InjectRepository(Staff)
        private defaultStaffRepository: Repository<Staff>,
    ) {
        this.StaffRepository = new StaffRepository()
    }

    async insertStaff(staff: Staff) {
        if (!staff.name || !staff.servico) throw new BadRequestException("Nome e serviço Devem ser preenchidos!")
        const checkExistence = await this.defaultStaffRepository.find({ where: staff })
        if (checkExistence.length != 0) {
            throw new BadRequestException("Funcionário Ja cadastrado !")
        }
        else {
            const newUser = this.defaultStaffRepository.create(staff)
            console.log("Funcionário Cadastrado com Sucesso !")
            return this.defaultStaffRepository.save(newUser)
        }
    }

    async getStaffs() {
        return this.defaultStaffRepository.find()
    }

    async updateStaff(id: string, newDate: Partial<Staff>) {
        try {
            const findUsertoUpdate = await this.defaultStaffRepository.findBy({ id: id })
            if (findUsertoUpdate) {
                const updated = this.defaultStaffRepository.update(id, newDate)
                console.log("Usuário Atualizado !!")
                return updated
            }
        }
        catch (err) {
            console.log("err", err)
        }
    }

    async deleteStaff(id: number) {
        try {
            const userDeleted = await this.defaultStaffRepository.delete(id)
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
