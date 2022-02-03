import {
	Table,
	Column,
	Model,
	AutoIncrement,
	PrimaryKey,
	DataType,
	AllowNull,
	Default,
	ForeignKey,
	BelongsTo,
	HasMany,
} from 'sequelize-typescript';
import { CommentIF } from './comment.interface';

/*
	Association & Relations
*/
import { Product } from '../../products/schemas/product.model';
import { User } from '../../users/schemas/user.model';

@Table({ updatedAt: true, createdAt: true, tableName: 'comments' })
export class Comment extends Model implements CommentIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@AllowNull(false)
	@Column(DataType.STRING)
	body: string;

	@Default(false)
	@Column(DataType.BOOLEAN)
	approved: boolean;

	/*
		Association & Relations
	*/
	@ForeignKey(() => User)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'author-id' })
	author_id: number;

	@BelongsTo(() => Product, { foreignKey: 'id', onDelete: 'SET NULL' })
	author: User;

	@ForeignKey(() => Product)
	@AllowNull(false)
	@Column({ type: DataType.INTEGER, field: 'product-id' })
	product_id: number;

	@BelongsTo(() => Product, { foreignKey: 'id', onDelete: 'CASCADE' })
	product: Product;

	@ForeignKey(() => Comment)
	@Column({ type: DataType.INTEGER, field: 'parent-id' })
	parent_id: number;

	@BelongsTo(() => Comment, { foreignKey: 'id', onDelete: 'SET NULL' })
	parent: Comment;

	@HasMany(() => Comment, 'id')
	children: Comment[];
}
