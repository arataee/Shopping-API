import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductMetasService } from './product-metas.service';
import {
	CreateProductMetaInput,
	ProductMeta,
	UpdateProductMetaInput,
} from './schemas/product-metas.types';

@Resolver()
export class ProductMetasResolver {
	constructor(private productMetasService: ProductMetasService) {}

	@Query(() => [ProductMeta])
	ProductMetas() {
		return this.productMetasService.findAll();
	}

	@Query(() => ProductMeta, { nullable: true })
	ProductMeta(@Args('id', { type: () => Int }) id: number) {
		return this.productMetasService.findOne(id);
	}

	@Mutation(() => ProductMeta)
	createProductMeta(@Args('input') input: CreateProductMetaInput) {
		return this.productMetasService.create(input);
	}

	@Mutation(() => ProductMeta)
	updateProductMeta(@Args('input') input: UpdateProductMetaInput) {
		return this.productMetasService.update(input.id, input);
	}

	@Mutation(() => ProductMeta)
	removeProductMeta(@Args('id', { type: () => Int }) id: number) {
		return this.productMetasService.remove(id);
	}
}
