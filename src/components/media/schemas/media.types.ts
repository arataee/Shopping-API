import {
	Field,
	InputType,
	Int,
	IntersectionType,
	ObjectType,
	OmitType,
	PartialType,
} from '@nestjs/graphql';
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

@InputType()
export class CreateMediaInput extends OmitType(
	Media,
	['id'] as const,
	InputType,
) {}

@InputType()
export class UpdateMediaInput extends IntersectionType(
	Media,
	PartialType(CreateMediaInput, InputType),
	InputType,
) {}
