import { Roles } from './user-roles.enum';

export interface UsersIF {
	id: number;
	name: string;
	email: string;
	password?: string;
	phone: number;
	address: string;
	role: Roles;
}
