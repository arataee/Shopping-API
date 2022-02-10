import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from '../users/schemas/user.model';
import { UsersService } from '../users/users.service';
import { RegisterUserInput } from './schemas/auth.inputs';

@Injectable()
export class AuthService {
	constructor(private users: UsersService, private jwtService: JwtService) {}

	async register(data: RegisterUserInput) {
		return await this.users.create(data);
	}

	async validateUser(email: string, password: string) {
		const user = await this.users.findByEmail(email);
		return user && (await compare(password, user.password)) ? user : null;
	}

	async login(user: User) {
		const payload = { id: user.id, role: user.role };
		const token = this.jwtService.sign(payload, {
			secret: process.env.AUTH_SECRET,
			expiresIn: process.env.AUTH_EXPIRES,
		});
		return { access_token: token, sub: user.id };
	}
}
