import {
	Field,
	InputType,
	Int,
	InterfaceType,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
	PickType,
	registerEnumType,
} from '@nestjs/graphql';
import { Role } from './user-roles.enum';
import { UsersIF } from './user.interface';
registerEnumType(Role, { name: 'Roles' });

@InterfaceType()
export class UserType implements UsersIF {
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

	@Field((type) => Role)
	role: Role;
}

@ObjectType()
export class User extends OmitType(
	UserType,
	['password'] as const,
	ObjectType,
) {}

@InputType()
export class CreateUserInput extends IntersectionType(
	OmitType(UserType, ['id', 'role'] as const, InputType),
	PartialType(PickType(UserType, ['role'] as const), InputType),
	InputType,
) {}

@InputType()
export class UpdateUserInput extends IntersectionType(
	UserType,
	PartialType(CreateUserInput, InputType),
	InputType,
) {}
