import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
} from '@nestjs/graphql';
import { Matches } from 'class-validator';
import { CategoryIF } from './category.interface';

@ObjectType()
export class Category implements CategoryIF {
	@Field(() => Int)
	id: number;

	@Matches(/^(\d|\w)?.*(\d|\w)$/)
	@Field()
	name: string;

	@Field({ nullable: true })
	description: string;

	@Field()
	slug: string;
}

@InputType()
export class CreateCategoryInput extends OmitType(
	Category,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateCategoryInput extends IntersectionType(
	Category,
	PartialType(CreateCategoryInput, InputType),
	InputType,
) {}
