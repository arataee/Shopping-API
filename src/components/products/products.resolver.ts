import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { UpdateProductInput } from './dto/update-product.input';
import { CreateProductInput } from './dto/create-product.input';

@Resolver()
export class ProductsResolver {
	constructor(private productsService: ProductsService) {}

	@Query(() => [Product])
	Products() {
		return this.productsService.findAll();
	}

	@Query(() => Product, { nullable: true })
	Product(@Args('id', { type: () => Int }) id: number) {
		return this.productsService.findOne(id);
	}

	@Mutation(() => Product)
	createProduct(@Args('input') input: CreateProductInput) {
		return this.productsService.create(input);
	}

	@Mutation(() => Product)
	updateProduct(@Args('input') input: UpdateProductInput) {
		return this.productsService.update(input.id, input);
	}

	@Mutation(() => Product)
	removeProduct(@Args('id', { type: () => Int }) id: number) {
		return this.productsService.remove(id);
	}
}
