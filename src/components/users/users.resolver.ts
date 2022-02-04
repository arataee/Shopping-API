import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserToken } from './schemas/user.type';
import { UpdateUserInput } from './schemas/update-user.input';
import { CreateUserInput } from './schemas/create-user.input';
import { LoginUserInput } from './schemas/login-user.input';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Resolver()
export class UsersResolver {
	constructor(private usersService: UsersService, private jwt: JwtService) {}

	@Query(() => [User])
	Users() {
		return this.usersService.findAll();
	}

	@Query(() => User, { nullable: true })
	User(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.findOne(id);
	}

	@Mutation(() => User)
	updateUser(@Args('input') input: UpdateUserInput) {
		return this.usersService.update(input.id, input);
	}

	@Mutation(() => User)
	removeUser(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.remove(id);
	}

	@Mutation(() => User)
	register(@Args('input') input: CreateUserInput) {
		return this.usersService.create(input);
	}

	@Mutation(() => UserToken)
	async login(@Args('input') data: LoginUserInput) {
		const user = await this.usersService.findByEmail(data.email);
		if (!user) throw new Error('email or password is incorrect!');
		const valid = await compare(data.password, user.password);
		if (!valid) throw new Error('email or password is incorrect!');
		const { id, role } = user;
		return {
			token: await this.jwt.signAsync(
				{ id, role },
				{
					secret: process.env.AUTH_SECRET,
					expiresIn: process.env.AUTH_EXPIRES,
				},
			),
		};
	}
}
