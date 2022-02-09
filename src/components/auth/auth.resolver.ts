import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { User } from '../users/schemas/user.type';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LoginUserInput } from './schemas/login-user.input';
import { Login } from './schemas/login.type';
import { RegisterUserInput } from './schemas/register-user.input';

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) {}
	@Mutation(() => User)
	register(@Args('input') input: RegisterUserInput) {
		return this.authService.register(input);
	}

	@UseGuards(GqlAuthGuard)
	@Mutation(() => Login)
	async login(@Args('input') input: LoginUserInput, @Context() req: any) {
		return await this.authService.login(req.user);
	}
}
