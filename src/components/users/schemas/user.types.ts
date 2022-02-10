import {
	Field,
	InputType,
	Int,
	InterfaceType,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
	registerEnumType,
} from '@nestjs/graphql';
import { Roles } from './user-roles.enum';
import { UsersIF } from './user.interface';
registerEnumType(Roles, { name: 'Roles' });

@InterfaceType()
class UserType implements UsersIF {
	@Field(() => Int)
	id: number;

	@Field({ nullable: true })
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field({ nullable: true })
	phone: string;

	@Field({ nullable: true })
	address: string;

	@Field((type) => Roles)
	role: Roles;
}

@ObjectType()
export class User extends OmitType(
	UserType,
	['password'] as const,
	ObjectType,
) {}

@InputType()
export class CreateUserInput extends OmitType(
	UserType,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateUserInput extends IntersectionType(
	UserType,
	PartialType(CreateUserInput, InputType),
	InputType,
) {}
