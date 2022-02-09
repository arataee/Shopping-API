import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RegisterUserInput {
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
}
