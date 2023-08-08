import { User } from "../entities/users.entity";
import { Repository } from 'typeorm';

export class UserRepository extends Repository<User>  {

    public async createUser(data: Partial<User>): Promise<User> {
        console.log('data', data)
        console.log(this)
        const newUser = this.create(data)
        return this.save(newUser)
    }
}