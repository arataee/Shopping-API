import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductCategory } from './schemas/product-category.model';
import {
	CreateProductCategoryInput,
	UpdateProductCategoryInput,
} from './schemas/product-category.types';

@Injectable()
export class ProductCategoriesService {
	constructor(
		@InjectModel(ProductCategory)
		private productCategory: typeof ProductCategory,
	) {}

	async findAll() {
		const productCategories = await this.productCategory.findAll();
		return productCategories;
	}

	async findOne(id: number) {
		const productCategory = await this.productCategory.findOne({
			where: {
				id,
			},
		});
		return productCategory;
	}

	async create(data: CreateProductCategoryInput) {
		return await this.productCategory.create({ ...data });
	}

	async update(id: number, data: UpdateProductCategoryInput) {
		const productCategory = await this.findOne(id);
		return await productCategory.update(data);
	}

	async remove(id: number) {
		const productCategory = await this.findOne(id);
		await productCategory.destroy();
		return productCategory;
	}
}
