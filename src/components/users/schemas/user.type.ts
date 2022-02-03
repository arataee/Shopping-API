import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Roles } from './user-roles.enum';
import { UsersIF } from './user.interface';

@ObjectType()
export class User implements UsersIF {
	@Field(() => Int)
	id: number;

	@Field({ nullable: true })
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field(() => Int, { nullable: true })
	phone: number;

	@Field({ nullable: true })
	address: string;

	@Field((type) => Roles)
	role: Roles;
}
