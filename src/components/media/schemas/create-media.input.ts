import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMediaInput {
	@Field()
	url: string;

	@Field()
	description: string;
}
