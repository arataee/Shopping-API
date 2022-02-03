import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductMediaService } from './product-media.service';
import { ProductMedia } from './schemas/product-media.type';
import { UpdateProductMediaInput } from './schemas/update-product-media.input';
import { CreateProductMediaInput } from './schemas/create-product-media.input';

@Resolver()
export class ProductMediaResolver {
	constructor(private productMediaService: ProductMediaService) {}

	@Query(() => [ProductMedia])
	AllProductMedia() {
		return this.productMediaService.findAll();
	}

	@Query(() => ProductMedia, { nullable: true })
	ProductMedia(@Args('id', { type: () => Int }) id: number) {
		return this.productMediaService.findOne(id);
	}

	@Mutation(() => ProductMedia)
	createProductMedia(@Args('input') input: CreateProductMediaInput) {
		return this.productMediaService.create(input);
	}

	@Mutation(() => ProductMedia)
	updateProductMedia(@Args('input') input: UpdateProductMediaInput) {
		return this.productMediaService.update(input.id, input);
	}

	@Mutation(() => ProductMedia)
	removeProductMedia(@Args('id', { type: () => Int }) id: number) {
		return this.productMediaService.remove(id);
	}
}
