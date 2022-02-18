import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auth } from '../../utils/guards';
import { Role } from '../users/schemas/user-roles.enum';
import { CategoriesService } from './categories.service';
import {
	Category,
	CreateCategoryInput,
	UpdateCategoryInput,
} from './schemas/category.types';

@Resolver()
export class CategoriesResolver {
	constructor(private categoriesService: CategoriesService) {}

	@Query(() => [Category])
	Categories() {
		return this.categoriesService.findAll();
	}

	@Query(() => Category, { nullable: true })
	Category(@Args('id', { type: () => Int }) id: number) {
		const category = this.categoriesService.findOne(id);
		if (!category) {
			throw new NotFoundException();
		}
		return category;
	}

	@Auth(Role.Admin)
	@Mutation(() => Category)
	createCategory(@Args('input') input: CreateCategoryInput) {
		return this.categoriesService.create(input);
	}

	@Auth(Role.Admin)
	@Mutation(() => Category)
	async updateCategory(@Args('input') input: UpdateCategoryInput) {
		const category = this.categoriesService.update(input.id, input);
		if (!category) {
			throw new NotFoundException();
		}
		return category;
	}

	@Auth(Role.Admin)
	@Mutation(() => Category)
	removeCategory(@Args('id', { type: () => Int }) id: number) {
		const category = this.categoriesService.remove(id);
		if (!category) {
			throw new NotFoundException();
		}
		return category;
	}
}
