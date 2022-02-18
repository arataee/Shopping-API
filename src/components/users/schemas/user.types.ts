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
import { IsEmail, IsIn, IsPhoneNumber } from 'class-validator';
import { IsPassword } from '../../../utils/validation';
import { Role, RolesArr } from './user-roles.enum';
import { UsersIF } from './user.interface';
registerEnumType(Role, { name: 'Roles' });

@InterfaceType()
export class UserType implements UsersIF {
	@Field(() => Int)
	id: number;

	@Field({ nullable: true })
	name: string;

	@IsEmail()
	@Field()
	email: string;

	@IsPassword
	@Field()
	password: string;

	@IsPhoneNumber()
	@Field({ nullable: true })
	phone: string;

	@Field({ nullable: true })
	address: string;

	@IsIn(RolesArr)
	@Field((type) => Role, { defaultValue: Role.Default })
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
	PickType(UserType, ['email', 'password'] as const, InputType),
	PartialType(
		PickType(
			UserType,
			['role', 'address', 'phone', 'name'] as const,
			InputType,
		),
		InputType,
	),
	InputType,
) {}

@InputType()
export class UpdateUserInput extends IntersectionType(
	PickType(UserType, ['id'] as const, InputType),
	PartialType(CreateUserInput, InputType),
	InputType,
) {}
