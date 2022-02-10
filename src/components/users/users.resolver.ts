import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, CreateUserInput, UpdateUserInput } from './schemas/user.types';
import { BadRequestException, NotFoundException } from '@nestjs/common';

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
			throw new NotFoundException('User Not Found!');
		}
		return user;
	}

	@Mutation(() => User)
	async createUser(@Args('input') input: CreateUserInput) {
		const { user, error } = await this.usersService.create(input);
		if (error) {
			throw new BadRequestException(error.errors[0].message);
		}
		return user;
	}

	@Mutation(() => User)
	async updateUser(@Args('input') input: UpdateUserInput) {
		const user = await this.usersService.update(input.id, input);
		if (!user) {
			throw new NotFoundException('User Not Found!');
		}
		return user;
	}

	@Mutation(() => User)
	async removeUser(@Args('id', { type: () => Int }) id: number) {
		const user = await this.usersService.remove(id);
		if (!user) {
			throw new NotFoundException('User Not Found!');
		}
		return user;
	}
}
