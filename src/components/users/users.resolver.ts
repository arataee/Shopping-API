import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './schemas/user.type';
import { UpdateUserInput } from './schemas/update-user.input';
import { CreateUserInput } from './schemas/create-user.input';

@Resolver()
export class UsersResolver {
	constructor(private usersService: UsersService) {}

	@Query(() => [User])
	Users() {
		return this.usersService.findAll();
	}

	@Query(() => User, { nullable: true })
	User(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.findOne(id);
	}

	@Mutation(() => User)
	createUser(@Args('input') input: CreateUserInput) {
		return this.usersService.create(input);
	}

	@Mutation(() => User)
	updateUser(@Args('input') input: UpdateUserInput) {
		return this.usersService.update(input.id, input);
	}

	@Mutation(() => User)
	removeUser(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.remove(id);
	}
}
