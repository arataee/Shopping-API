import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auth } from '../../utils/guards';
import { Role } from '../users/schemas/user-roles.enum';
import { MediaService } from './media.service';
import {
	CreateMediaInput,
	Media,
	UpdateMediaInput,
} from './schemas/media.types';

@Auth(Role.Admin)
@Resolver()
export class MediaResolver {
	constructor(private mediaService: MediaService) {}

	@Query(() => [Media])
	AllMedia() {
		return this.mediaService.findAll();
	}

	@Query(() => Media, { nullable: true })
	Media(@Args('id', { type: () => Int }) id: number) {
		const media = this.mediaService.findOne(id);
		if (!media) {
			throw new NotFoundException();
		}
		return media;
	}

	@Mutation(() => Media)
	createMedia(@Args('input') input: CreateMediaInput) {
		return this.mediaService.create(input);
	}

	@Mutation(() => Media)
	updateMedia(@Args('input') input: UpdateMediaInput) {
		const media = this.mediaService.update(input.id, input);
		if (!media) {
			throw new NotFoundException();
		}
		return media;
	}

	@Mutation(() => Media)
	removeMedia(@Args('id', { type: () => Int }) id: number) {
		const media = this.mediaService.remove(id);
		if (!media) {
			throw new NotFoundException();
		}
		return media;
	}
}
