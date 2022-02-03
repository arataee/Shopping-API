import { Field, InputType, Int } from '@nestjs/graphql';
import { Roles } from './user-roles.enum';

@InputType()
export class CreateUserInput {
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

	@Field((type) => Roles, { nullable: true })
	role: Roles;
}
