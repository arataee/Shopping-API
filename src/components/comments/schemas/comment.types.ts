import {
	Field,
	InputType,
	Int,
	ObjectType,
	OmitType,
	PickType,
} from '@nestjs/graphql';
import { CommentIF } from './comment.interface';

@ObjectType()
export class Comment implements CommentIF {
	@Field(() => Int)
	id: number;

	@Field()
	body: string;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int, { nullable: true })
	parent_id: number;

	@Field(() => Int)
	author_id: number;

	@Field()
	approved: boolean;
}

@InputType()
export class CreateCommentInput extends OmitType(
	Comment,
	['id', 'approved'] as const,
	InputType,
) {}

@InputType()
export class UpdateCommentInput extends PickType(
	Comment,
	['id', 'body'] as const,
	InputType,
) {}
