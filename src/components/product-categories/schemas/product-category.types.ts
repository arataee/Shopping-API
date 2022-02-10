import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
} from '@nestjs/graphql';
import { ProductCategoryIF } from './product-category.interface';

@ObjectType()
export class ProductCategory implements ProductCategoryIF {
	@Field(() => Int)
	id: number;

	@Field(() => Int)
	product_id: number;

	@Field(() => Int)
	category_id: number;
}

@InputType()
export class CreateProductCategoryInput extends OmitType(
	ProductCategory,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateProductCategoryInput extends IntersectionType(
	ProductCategory,
	PartialType(CreateProductCategoryInput, InputType),
	InputType,
) {}
