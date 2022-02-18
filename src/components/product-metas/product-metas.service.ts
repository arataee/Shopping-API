import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductMeta } from './schemas/product-metas.model';
import {
	CreateProductMetaInput,
	UpdateProductMetaInput,
} from './schemas/product-metas.types';

@Injectable()
export class ProductMetasService {
	constructor(
		@InjectModel(ProductMeta) private productMeta: typeof ProductMeta,
	) {}

	async findAll() {
		const productMetas = await this.productMeta.findAll();
		return productMetas;
	}

	async findOne(id: number) {
		const productMeta = await this.productMeta.findOne({
			where: {
				id,
			},
		});
		return productMeta;
	}

	async create(data: CreateProductMetaInput) {
		return await this.productMeta.create(data as any);
	}

	async update(id: number, data: UpdateProductMetaInput) {
		const productMeta = await this.findOne(id);
		if (!productMeta) {
			return null;
		}
		return await productMeta.update(data);
	}

	async remove(id: number) {
		const productMeta = await this.findOne(id);
		if (!productMeta) {
			return null;
		}
		await productMeta.destroy();
		return productMeta;
	}
}
