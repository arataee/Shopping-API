import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auth } from 'src/utils/guards';
import { Role } from '../users/schemas/user-roles.enum';
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
		const productMeta = this.productMetasService.findOne(id);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMeta)
	createProductMeta(@Args('input') input: CreateProductMetaInput) {
		return this.productMetasService.create(input);
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMeta)
	updateProductMeta(@Args('input') input: UpdateProductMetaInput) {
		const productMeta = this.productMetasService.update(input.id, input);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}

	@Auth(Role.Admin)
	@Mutation(() => ProductMeta)
	removeProductMeta(@Args('id', { type: () => Int }) id: number) {
		const productMeta = this.productMetasService.remove(id);
		if (!productMeta) {
			throw new NotFoundException();
		}
		return productMeta;
	}
}
