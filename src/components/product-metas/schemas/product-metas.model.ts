import {
	Table,
	Column,
	Model,
	AutoIncrement,
	PrimaryKey,
	DataType,
	AllowNull,
	ForeignKey,
	BelongsTo,
} from 'sequelize-typescript';
import { ProductMetaIF } from './product-meta.interface';

/*
	Association & Relations
*/
import { Product } from '../../products/schemas/product.model';

@Table({ updatedAt: false, createdAt: false, tableName: 'product-metas' })
export class ProductMeta extends Model implements ProductMetaIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@AllowNull(false)
	@Column(DataType.STRING)
	key: string;

	@Column(DataType.STRING)
	value: string;

	/*
		Association & Relations
	*/
	@ForeignKey(() => Product)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'category-id' })
	product_id: number;

	@BelongsTo(() => Product)
	product: Product;
}
