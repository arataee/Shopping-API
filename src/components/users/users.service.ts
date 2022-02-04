import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserInput } from './schemas/create-user.input';
import { UpdateUserInput } from './schemas/update-user.input';
import { User } from './schemas/user.model';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private user: typeof User) {}

	async findAll() {
		const users = await this.user.findAll();
		return users;
	}

	async findOne(id: number) {
		const user = await this.user.findOne({
			where: {
				id,
			},
		});
		return user;
	}

	async findByEmail(email: string) {
		const user = await this.user.findOne({
			where: {
				email,
			},
		});
		return user;
	}

	async create(data: CreateUserInput) {
		return await this.user.create({ ...data });
	}

	async update(id: number, data: UpdateUserInput) {
		const user = await this.findOne(id);
		return await user.update(data);
	}

	async remove(id: number) {
		const user = await this.findOne(id);
		await user.destroy();
		return user;
	}
}
