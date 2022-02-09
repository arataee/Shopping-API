import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Login {
	@Field()
	access_token: string;

	@Field()
	sub: number;
}
