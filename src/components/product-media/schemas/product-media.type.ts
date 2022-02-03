import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductMediaIF } from './product-media.interface';

@ObjectType()
export class ProductMedia implements ProductMediaIF {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	media_id: number;
}
