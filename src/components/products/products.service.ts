import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Products } from './entities/product.model';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel(Products) private productsModel: typeof Products,
	) {}

	async findAll() {
		const products = await this.productsModel.findAll();
		return products;
	}

	async findOne(id: number) {
		const product = await this.productsModel.findOne({
			where: {
				id,
			},
		});
		return product;
	}

	async create(data: CreateProductInput) {
		return await this.productsModel.create({ ...data });
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
