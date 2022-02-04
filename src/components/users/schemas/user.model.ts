import {
	Table,
	Column,
	Model,
	AutoIncrement,
	Unique,
	PrimaryKey,
	DataType,
	AllowNull,
	HasMany,
	Default,
	BeforeCreate,
} from 'sequelize-typescript';
import { Roles } from './user-roles.enum';
import { UsersIF } from './user.interface';
import { genSalt, hash } from 'bcryptjs';

/*
	Association & Relations
*/
import { Product } from 'src/components/products/schemas/product.model';
import { Comment } from '../../comments/schemas/comment.model';

@Table({ updatedAt: false, createdAt: true, tableName: 'user' })
export class User extends Model implements UsersIF {
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number;

	@Column(DataType.STRING)
	name: string;

	@Unique
	@AllowNull(false)
	@Column(DataType.STRING)
	email: string;

	@BeforeCreate
	static hashPassword = async (instance: User) => {
		const salt = await genSalt(10);
		instance.password = await hash(instance.password, salt);
	};

	@AllowNull(false)
	@Column(DataType.STRING)
	password: string;

	@Column(DataType.INTEGER)
	phone: number;

	@Column(DataType.STRING)
	address: string;

	@AllowNull(false)
	@Default('User')
	@Column(DataType.ENUM('Admin', 'User'))
	role: Roles;

	/*
		Association & Relations
	*/
	@HasMany(() => Comment, 'id')
	comments: Comment[];

	@HasMany(() => Product, 'id')
	products: Product[];
}
