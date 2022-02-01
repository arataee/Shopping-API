import { Table, Column, Model } from 'sequelize-typescript';

@Table({ updatedAt: false, createdAt: false })
export class Product extends Model {
	@Column
	name: string;
	
}
