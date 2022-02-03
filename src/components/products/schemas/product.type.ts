import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductIF } from './product.interface';

@ObjectType()
export class Product implements ProductIF {
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

	@Field()
	slug: string;

	@Field(() => Int)
	price: number;

	@Field(() => Int)
	stock: number;
}
