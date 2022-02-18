import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductMedia } from './schemas/product-media.model';
import {
	CreateProductMediaInput,
	UpdateProductMediaInput,
} from './schemas/product-media.types';

@Injectable()
export class ProductMediaService {
	constructor(
		@InjectModel(ProductMedia) private productMedia: typeof ProductMedia,
	) {}

	async findAll() {
		const productMedia = await this.productMedia.findAll();
		return productMedia;
	}

	async findOne(id: number) {
		const productMedia = await this.productMedia.findOne({
			where: {
				id,
			},
		});
		return productMedia;
	}

	async create(data: CreateProductMediaInput) {
		return await this.productMedia.create({ ...data });
	}

	async update(id: number, data: UpdateProductMediaInput) {
		const productMedia = await this.findOne(id);
		if (!productMedia) {
			return null;
		}
		return await productMedia.update(data);
	}

	async remove(id: number) {
		const productMedia = await this.findOne(id);
		if (!productMedia) {
			return null;
		}
		await productMedia.destroy();
		return productMedia;
	}
}
