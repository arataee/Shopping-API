import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductCategoriesService } from './product-categories.service';
import {
	CreateProductCategoryInput,
	ProductCategory,
	UpdateProductCategoryInput,
} from './schemas/product-category.types';

@Resolver()
export class ProductCategoriesResolver {
	constructor(private productCategoriesService: ProductCategoriesService) {}

	@Query(() => [ProductCategory])
	ProductCategories() {
		return this.productCategoriesService.findAll();
	}

	@Query(() => ProductCategory, { nullable: true })
	ProductCategory(@Args('id', { type: () => Int }) id: number) {
		return this.productCategoriesService.findOne(id);
	}

	@Mutation(() => ProductCategory)
	createProductCategory(@Args('input') input: CreateProductCategoryInput) {
		return this.productCategoriesService.create(input);
	}

	@Mutation(() => ProductCategory)
	updateProductCategory(@Args('input') input: UpdateProductCategoryInput) {
		return this.productCategoriesService.update(input.id, input);
	}

	@Mutation(() => ProductCategory)
	removeProductCategory(@Args('id', { type: () => Int }) id: number) {
		return this.productCategoriesService.remove(id);
	}
}
