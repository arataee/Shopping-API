import { Field, InputType, Int } from '@nestjs/graphql';
import { Roles } from './user-roles.enum';

@InputType()
export class UpdateUserInput {
	@Field(() => Int)
	id: number;

	@Field({ nullable: true })
	name: string;

	@Field({ nullable: true })
	email: string;

	@Field({ nullable: true })
	password: string;

	@Field(() => Int, { nullable: true })
	phone: number;

	@Field({ nullable: true })
	address: string;

	@Field((type) => Roles)
	role: Roles;
}
