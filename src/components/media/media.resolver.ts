import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './schemas/media.type';
import { UpdateMediaInput } from './schemas/update-media.input';
import { CreateMediaInput } from './schemas/create-media.input';

@Resolver()
export class MediaResolver {
	constructor(private mediaService: MediaService) {}

	@Query(() => [Media])
	AllMedia() {
		return this.mediaService.findAll();
	}

	@Query(() => Media, { nullable: true })
	Media(@Args('id', { type: () => Int }) id: number) {
		return this.mediaService.findOne(id);
	}

	@Mutation(() => Media)
	createMedia(@Args('input') input: CreateMediaInput) {
		return this.mediaService.create(input);
	}

	@Mutation(() => Media)
	updateMedia(@Args('input') input: UpdateMediaInput) {
		return this.mediaService.update(input.id, input);
	}

	@Mutation(() => Media)
	removeMedia(@Args('id', { type: () => Int }) id: number) {
		return this.mediaService.remove(id);
	}
}
