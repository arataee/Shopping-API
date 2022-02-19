import { Provider } from '@nestjs/common';
import { Role } from '../components/users/schemas/user-roles.enum';
import { CreateUserInput } from '../components/users/schemas/user.types';
import { UsersService } from '../components/users/users.service';

export const DefaultAdminUser: Provider = {
	provide: 'DefaultAdminUser',
	useFactory: async (usersService: UsersService) => {
		const AdminUser: CreateUserInput = {
			email: process.env.ADMIN_EMAIL,
			password: process.env.ADMIN_PASSWORD,
			role: Role.Admin,
		};
		if (!(AdminUser.email && AdminUser.password)) {
			console.error('Admin user must be configured!');
			return null;
		}
		const user = await usersService.findByEmail(AdminUser.email);
		if (user) {
			return await usersService.update(user.id, AdminUser as any);
		}
		return await usersService.create(AdminUser as any);
	},
	inject: [UsersService],
};
