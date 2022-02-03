import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductMediaInput {
	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	media_id: number;
}
