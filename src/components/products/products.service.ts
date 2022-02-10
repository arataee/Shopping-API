import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
	CreateProductInput,
	UpdateProductInput,
} from './schemas/product.types';
import { Product } from './schemas/product.model';

@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product) private product: typeof Product) {}

	async findAll() {
		const products = await this.product.findAll();
		return products;
	}

	async findOne(id: number) {
		const product = await this.product.findOne({
			where: {
				id,
			},
		});
		return product;
	}

	async create(data: CreateProductInput) {
		return await this.product.create({ ...data });
	}

	async update(id: number, data: UpdateProductInput) {
		const product = await this.findOne(id);
		return await product.update(data);
	}

	async remove(id: number) {
		const product = await this.findOne(id);
		await product.destroy();
		return product;
	}
}
