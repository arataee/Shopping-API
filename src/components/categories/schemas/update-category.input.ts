import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	description: string;
}
