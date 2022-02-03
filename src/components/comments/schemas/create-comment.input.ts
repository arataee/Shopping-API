import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
	@Field()
	body: string;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	parent_id: number;

	@Field(() => Int)
	author_id: number;
}
