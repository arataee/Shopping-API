import {
	Table,
	Column,
	Model,
	AutoIncrement,
	PrimaryKey,
	DataType,
	AllowNull,
	BelongsToMany,
} from 'sequelize-typescript';
import { ProductMedia } from 'src/components/product-media/schemas/product-media.model';
import { Product } from 'src/components/products/schemas/product.model';
import { MediaIF } from './media.interface';

@Table({ updatedAt: false, createdAt: true, tableName: 'media' })
export class Media extends Model implements MediaIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@AllowNull(false)
	@Column(DataType.STRING)
	url: string;

	@Column(DataType.STRING)
	description: string;

	/*
		Association & Relations
	*/
	@BelongsToMany(() => Product, () => ProductMedia, 'id')
	products: Product[];
}
