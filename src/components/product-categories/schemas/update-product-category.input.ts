import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductCategoryInput {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	category_id: number;
}
