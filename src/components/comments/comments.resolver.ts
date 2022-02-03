import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './schemas/comment.type';
import { UpdateCommentInput } from './schemas/update-comment.input';
import { CreateCommentInput } from './schemas/create-comment.input';

@Resolver()
export class CommentsResolver {
	constructor(private commentsService: CommentsService) {}

	@Query(() => [Comment])
	Comments() {
		return this.commentsService.findAll();
	}

	@Query(() => Comment, { nullable: true })
	Comment(@Args('id', { type: () => Int }) id: number) {
		return this.commentsService.findOne(id);
	}

	@Mutation(() => Comment)
	createComment(@Args('input') input: CreateCommentInput) {
		return this.commentsService.create(input);
	}

	@Mutation(() => Comment)
	updateComment(@Args('input') input: UpdateCommentInput) {
		return this.commentsService.update(input.id, input);
	}

	@Mutation(() => Comment)
	removeComment(@Args('id', { type: () => Int }) id: number) {
		return this.commentsService.remove(id);
	}
}
