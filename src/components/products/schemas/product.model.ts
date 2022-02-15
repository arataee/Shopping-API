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
	BelongsToMany,
	HasMany,
} from 'sequelize-typescript';
import { slugifyModelKey } from '../../../utils/slugify-model-hook';
import { ProductIF } from './product.interface';

/*
	Association & Relations
*/
import { Category } from '../../categories/schemas/category.model';
import { Comment } from '../../comments/schemas/comment.model';
import { Media } from '../../media/schemas/media.model';
import { ProductCategory } from '../../product-categories/schemas/product-category.model';
import { ProductMedia } from '../../product-media/schemas/product-media.model';
import { ProductMeta } from '../../product-metas/schemas/product-metas.model';

@Table({ updatedAt: true, createdAt: true, tableName: 'products' })
export class Product extends Model implements ProductIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@Column(DataType.STRING)
	title: string;

	@Column(DataType.STRING)
	description: string;

	@Column(DataType.TEXT)
	content: string;

	@Column({ type: DataType.STRING, field: 'index-image' })
	indexImage: string;

	@BeforeCreate
	static slugify = slugifyModelKey<Product>('slug', 'title');

	@Unique
	@Column(DataType.STRING)
	slug: string;

	@Column(DataType.INTEGER)
	price: number;

	@AllowNull(false)
	@Column(DataType.INTEGER)
	stock: number;

	/*
		Association & Relations
	*/
	@BelongsToMany(() => Category, () => ProductCategory)
	categories: Category[];

	@BelongsToMany(() => Media, () => ProductMedia)
	media: Media[];

	@HasMany(() => Comment)
	comments: Comment[];

	@HasMany(() => ProductMeta)
	productMetas: ProductMeta[];
}
