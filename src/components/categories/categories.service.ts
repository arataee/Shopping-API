import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryInput } from './schemas/create-category.input';
import { UpdateCategoryInput } from './schemas/update-category.input';
import { Category } from './schemas/category.model';

@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category) private category: typeof Category) {}

	async findAll() {
		const categories = await this.category.findAll();
		return categories;
	}

	async findOne(id: number) {
		const category = await this.category.findOne({
			where: {
				id,
			},
		});
		return category;
	}

	async create(data: CreateCategoryInput) {
		return await this.category.create({ ...data });
	}

	async update(id: number, data: UpdateCategoryInput) {
		const category = await this.findOne(id);
		return await category.update(data);
	}

	async remove(id: number) {
		const category = await this.findOne(id);
		await category.destroy();
		return category;
	}
}
