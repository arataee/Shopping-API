import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductMediaInput {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	media_id: number;
}
