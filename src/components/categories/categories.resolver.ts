import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './schemas/category.type';
import { CreateCategoryInput } from './schemas/create-category.input';
import { UpdateCategoryInput } from './schemas/update-category.input';

@Resolver()
export class CategoriesResolver {
	constructor(private categoriesService: CategoriesService) {}

	@Query(() => [Category])
	Categories() {
		return this.categoriesService.findAll();
	}

	@Query(() => Category, { nullable: true })
	Category(@Args('id', { type: () => Int }) id: number) {
		return this.categoriesService.findOne(id);
	}

	@Mutation(() => Category)
	createCategory(@Args('input') input: CreateCategoryInput) {
		return this.categoriesService.create(input);
	}

	@Mutation(() => Category)
	updateCategory(@Args('input') input: UpdateCategoryInput) {
		return this.categoriesService.update(input.id, input);
	}

	@Mutation(() => Category)
	removeCategory(@Args('id', { type: () => Int }) id: number) {
		return this.categoriesService.remove(id);
	}
}
