import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './schemas/media.model';
import { CreateMediaInput, UpdateMediaInput } from './schemas/media.types';

@Injectable()
export class MediaService {
	constructor(@InjectModel(Media) private media: typeof Media) {}

	async findAll() {
		const medias = await this.media.findAll();
		return medias;
	}

	async findOne(id: number) {
		const media = await this.media.findOne({
			where: {
				id,
			},
		});
		return media;
	}

	async create(data: CreateMediaInput) {
		return await this.media.create({ ...data });
	}

	async update(id: number, data: UpdateMediaInput) {
		const media = await this.findOne(id);
		if (!media) {
			return null;
		}
		return await media.update(data);
	}

	async remove(id: number) {
		const media = await this.findOne(id);
		if (!media) {
			return null;
		}
		await media.destroy();
		return media;
	}
}
