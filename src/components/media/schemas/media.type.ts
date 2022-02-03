import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediaIF } from './media.interface';

@ObjectType()
export class Media implements MediaIF {
	@Field(() => Int)
	id: number;

	@Field()
	url: string;

	@Field()
	description: string;
}
