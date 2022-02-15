import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
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
export class CreateProductInput extends OmitType(
	Product,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateProductInput extends IntersectionType(
	Product,
	PartialType(CreateProductInput, InputType),
	InputType,
) {}
