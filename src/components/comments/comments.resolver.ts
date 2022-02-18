import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import {
	Comment,
	CreateCommentInput,
	UpdateCommentInput,
} from './schemas/comment.types';

@Resolver()
export class CommentsResolver {
	constructor(private commentsService: CommentsService) {}

	@Query(() => [Comment])
	Comments() {
		return this.commentsService.findAll();
	}

	@Query(() => Comment, { nullable: true })
	Comment(@Args('id', { type: () => Int }) id: number) {
		const comment = this.commentsService.findOne(id);
		if (!comment) {
			throw new NotFoundException();
		}
		return comment;
	}

	@Mutation(() => Comment)
	createComment(@Args('input') input: CreateCommentInput) {
		return this.commentsService.create(input);
	}

	@Mutation(() => Comment)
	updateComment(@Args('input') input: UpdateCommentInput) {
		const comment = this.commentsService.update(input.id, input);
		if (!comment) {
			throw new NotFoundException();
		}
		return comment;
	}

	@Mutation(() => Comment)
	removeComment(@Args('id', { type: () => Int }) id: number) {
		const comment = this.commentsService.remove(id);
		if (!comment) {
			throw new NotFoundException();
		}
		return comment;
	}
}
