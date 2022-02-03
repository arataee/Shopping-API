import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateMediaInput {
	@Field(() => Int)
	id: number;

	@Field()
	url: string;

	@Field()
	description: string;
}
