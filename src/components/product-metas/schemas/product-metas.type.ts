import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductMetaIF } from './product-meta.interface';

@ObjectType()
export class ProductMeta implements ProductMetaIF {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field()
	key: string;

	@Field()
	value: string;
}
