import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductMetaInput {
	@Field(() => Int)
	product_id: number;

	@Field()
	key: string;

	@Field()
	value: string;
}
