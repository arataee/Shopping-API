import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategoryIF } from './product-category.interface';

@ObjectType()
export class ProductCategory implements ProductCategoryIF {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	category_id: number;
}
