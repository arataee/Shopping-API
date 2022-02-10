import { InputType, OmitType, PickType } from '@nestjs/graphql';
import { UserType } from '../../users/schemas/user.types';

@InputType()
export class LoginUserInput extends PickType(
	UserType,
	['email', 'password'] as const,
	InputType,
) {}

@InputType()
export class RegisterUserInput extends OmitType(
	UserType,
	['id', 'role'] as const,
	InputType,
) {}
