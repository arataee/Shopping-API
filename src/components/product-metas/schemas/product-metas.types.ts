import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
} from '@nestjs/graphql';
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

@InputType()
export class CreateProductMetaInput extends OmitType(
	ProductMeta,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateProductMetaInput extends IntersectionType(
	ProductMeta,
	PartialType(CreateProductMetaInput, InputType),
	InputType,
) {}
