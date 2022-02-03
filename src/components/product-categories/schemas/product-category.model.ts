import {
	Table,
	Column,
	Model,
	AutoIncrement,
	PrimaryKey,
	DataType,
	AllowNull,
	ForeignKey,
	BelongsToMany,
} from 'sequelize-typescript';
import { Category } from 'src/components/categories/schemas/category.model';
import { Product } from 'src/components/products/schemas/product.model';
import { ProductCategoryIF } from './product-category.interface';

@Table({ updatedAt: false, createdAt: false, tableName: 'product-category' })
export class ProductCategory extends Model implements ProductCategoryIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@ForeignKey(() => Product)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'product-id' })
	product_id: number;

	@ForeignKey(() => Category)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'category-id' })
	category_id: number;
}
