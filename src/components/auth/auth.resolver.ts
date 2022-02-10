import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { User } from '../users/schemas/user.types';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { Login } from './schemas/login.type';
import { RegisterUserInput, LoginUserInput } from './schemas/auth.inputs';

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) {}
	@Mutation(() => User)
	async register(@Args('input') input: RegisterUserInput) {
		return await this.authService.register(input);
	}

	@UseGuards(GqlAuthGuard)
	@Mutation(() => Login)
	async login(@Args('input') input: LoginUserInput, @Context() req: any) {
		return await this.authService.login(req.user);
	}
}
