import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	category_id: number;
}
