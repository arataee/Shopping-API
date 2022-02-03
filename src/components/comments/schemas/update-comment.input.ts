import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput {
	@Field(() => Int)
	id: number;

	@Field()
	body: string;
}
