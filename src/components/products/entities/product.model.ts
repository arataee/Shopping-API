import { Table, Column, Model } from 'sequelize-typescript';

@Table({ updatedAt: false, createdAt: false })
export class Products extends Model {
	@Column
	name: string;
}
