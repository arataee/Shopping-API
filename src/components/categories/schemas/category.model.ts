import {
	Table,
	Column,
	Model,
	AutoIncrement,
	Unique,
	PrimaryKey,
	DataType,
	BeforeCreate,
	AllowNull,
	BeforeUpdate,
	BelongsToMany,
} from 'sequelize-typescript';
import slugify from 'slugify';
import { CategoryIF } from './category.interface';

/*
	Association & Relations
*/
import { ProductCategory } from 'src/components/product-categories/schemas/product-category.model';
import { Product } from 'src/components/products/schemas/product.model';

@Table({ updatedAt: false, createdAt: false, tableName: 'categories' })
export class Category extends Model implements CategoryIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@AllowNull(false)
	@Column(DataType.STRING)
	name: string;

	@Column(DataType.STRING)
	description: string;

	@BeforeUpdate
	@BeforeCreate
	static slugify = (instance: Category) =>
		(instance.slug = slugify(instance.name));

	@Unique
	@Column(DataType.STRING)
	slug: string;

	/*
		Association & Relations
	*/
	@BelongsToMany(() => Product, () => ProductCategory)
	products: Product[];
}
