import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
	@Field(() => Int)
	id: number;

	@Field()
	title: string;

	@Field()
	description: string;

	@Field()
	content: string;

	@Field()
	indexImage: string;

	@Field(() => Int)
	price: number;

	@Field(() => Int)
	stock: number;
}
