import {
	Table,
	Column,
	Model,
	AutoIncrement,
	PrimaryKey,
	DataType,
	AllowNull,
	ForeignKey,
} from 'sequelize-typescript';
import { Media } from '../../media/schemas/media.model';
import { Product } from '../../products/schemas/product.model';
import { ProductMediaIF } from './product-media.interface';

@Table({ updatedAt: false, createdAt: true, tableName: 'products' })
export class ProductMedia extends Model implements ProductMediaIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@ForeignKey(() => Product)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'product-id' })
	product_id: number;

	@ForeignKey(() => Media)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'category-id' })
	media_id: number;
}
