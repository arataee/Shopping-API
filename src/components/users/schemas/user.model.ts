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
	BeforeUpdate,
} from 'sequelize-typescript';
import { Roles } from './user-roles.enum';
import { UsersIF } from './user.interface';
import { genSalt, hash } from 'bcryptjs';

/*
	Association & Relations
*/
import { Product } from '../../products/schemas/product.model';
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

	@BeforeUpdate
	@BeforeCreate
	static hashPassword = async (instance: User) => {
		if (instance.password) {
			const salt = await genSalt(10);
			instance.password = await hash(instance.password, salt);
		}
	};

	@AllowNull(false)
	@Column(DataType.STRING)
	password: string;

	@Column(DataType.INTEGER)
	phone: number;

	@Column(DataType.STRING)
	address: string;

	@AllowNull(false)
	@Default(Roles.User)
	@Column(DataType.ENUM(Roles.Admin, Roles.User))
	role: Roles;

	/*
		Association & Relations
	*/
	@HasMany(() => Comment, 'id')
	comments: Comment[];

	@HasMany(() => Product, 'id')
	products: Product[];
}
