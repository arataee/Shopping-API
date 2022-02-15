import { Role } from './user-roles.enum';

export interface UsersIF {
	id: number;
	name: string;
	email: string;
	password: string;
	phone: string;
	address: string;
	role: Role;
}
