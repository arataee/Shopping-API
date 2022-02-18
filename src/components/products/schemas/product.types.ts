import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	PartialType,
	PickType,
} from '@nestjs/graphql';
import { Matches, Min } from 'class-validator';
import { ProductIF } from './product.interface';

@ObjectType()
export class Product implements ProductIF {
	@Field(() => Int)
	id: number;

	@Matches(/^(\d|\w)?.*(\d|\w)$/)
	@Field()
	title: string;

	@Field({ nullable: true })
	description: string;

	@Field({ nullable: true })
	content: string;

	@Field({ nullable: true })
	indexImage: string;

	@Field()
	slug: string;

	@Min(0)
	@Field(() => Int)
	price: number;

	@Min(0)
	@Field(() => Int)
	stock: number;
}

@InputType()
export class CreateProductInput extends IntersectionType(
	PickType(Product, ['title', 'stock', 'price'] as const, InputType),
	PartialType(
		PickType(
			Product,
			['content', 'description', 'indexImage', 'slug'] as const,
			InputType,
		),
		InputType,
	),
) {}

CreateProductInput.prototype;
@InputType()
export class UpdateProductInput extends IntersectionType(
	PickType(Product, ['id'] as const, InputType),
	PartialType(CreateProductInput, InputType),
	InputType,
) {}
