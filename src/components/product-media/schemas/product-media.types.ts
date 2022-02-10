import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
} from '@nestjs/graphql';
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

@InputType()
export class CreateProductMediaInput extends OmitType(
	ProductMedia,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateProductMediaInput extends IntersectionType(
	ProductMedia,
	PartialType(CreateProductMediaInput, InputType),
	InputType,
) {}
