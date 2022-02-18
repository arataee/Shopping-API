import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserInput, UpdateUserInput } from './schemas/user.types';
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
		const user = await this.user.create(data as any);
		return user;
	}

	async update(id: number, data: UpdateUserInput) {
		const user = await this.findOne(id);
		if (!user) {
			return null;
		}
		return await user.update(data as any);
	}

	async remove(id: number) {
		const user = await this.findOne(id);
		if (!user) {
			return null;
		}
		await user.destroy();
		return user;
	}
}
