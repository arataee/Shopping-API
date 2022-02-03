import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CategoryIF } from './category.interface';

@ObjectType()
export class Category implements CategoryIF {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	slug: string;
}
