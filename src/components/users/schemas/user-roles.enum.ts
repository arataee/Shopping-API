import { registerEnumType } from '@nestjs/graphql';

export enum Roles {
	Admin = 'Admin',
	User = 'User',
}

registerEnumType(Roles, { name: 'Roles' });
