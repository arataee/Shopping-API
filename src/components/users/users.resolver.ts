import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, CreateUserInput, UpdateUserInput } from './schemas/user.types';
import { Auth } from '../../utils/guards';
import { Role } from './schemas/user-roles.enum';
import { NotFoundException } from '@nestjs/common';

@Auth(Role.Admin)
@Resolver()
export class UsersResolver {
	constructor(private usersService: UsersService) {}
	@Query(() => [User])
	async Users() {
		return await this.usersService.findAll();
	}

	@Query(() => User)
	async User(@Args('id', { type: () => Int }) id: number) {
		const user = await this.usersService.findOne(id);
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}

	@Mutation(() => User)
	async createUser(@Args('input') input: CreateUserInput) {
		const user = await this.usersService.create(input);
		return user;
	}

	@Mutation(() => User)
	async updateUser(@Args('input') input: UpdateUserInput) {
		const user = await this.usersService.update(input.id, input);
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}

	@Mutation(() => User)
	async removeUser(@Args('id', { type: () => Int }) id: number) {
		const user = await this.usersService.remove(id);
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}
}
