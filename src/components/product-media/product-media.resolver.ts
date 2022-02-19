import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auth } from '../../utils/guards';
import { Role } from '../users/schemas/user-roles.enum';
import { ProductMediaService } from './product-media.service';
import {
	CreateProductMediaInput,
	ProductMedia,
	UpdateProductMediaInput,
} from './schemas/product-media.types';

@Resolver()
export class ProductMediaResolver {
	constructor(private productMediaService: ProductMediaService) {}

	@Query(() => [ProductMedia])
	AllProductMedia() {
		return this.productMediaService.findAll();
	}

	@Query(() => ProductMedia, { nullable: true })
	ProductMedia(@Args('id', { type: () => Int }) id: number) {
		const productMeta = this.productMediaService.findOne(id);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMedia)
	createProductMedia(@Args('input') input: CreateProductMediaInput) {
		return this.productMediaService.create(input);
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMedia)
	updateProductMedia(@Args('input') input: UpdateProductMediaInput) {
		const productMeta = this.productMediaService.update(input.id, input);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMedia)
	removeProductMedia(@Args('id', { type: () => Int }) id: number) {
		const productMeta = this.productMediaService.remove(id);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}
}
