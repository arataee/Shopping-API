import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;
}
