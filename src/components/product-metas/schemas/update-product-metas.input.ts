import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductMetaInput {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field()
	key: string;

	@Field()
	value: string;
}
