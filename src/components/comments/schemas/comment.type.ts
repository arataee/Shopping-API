import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CommentIF } from './comment.interface';

@ObjectType()
export class Comment implements CommentIF {
	@Field(() => Int)
	id: number;

	@Field()
	body: string;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	parent_id: number;

	@Field(() => Int)
	author_id: number;

	@Field()
	approved: boolean;
}
