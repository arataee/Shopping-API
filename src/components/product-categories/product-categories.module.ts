import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategory } from './schemas/product-category.model';
import { ProductCategoriesResolver } from './product-categories.resolver';
import { ProductCategoriesService } from './product-categories.service';

@Module({
	imports: [SequelizeModule.forFeature([ProductCategory])],
	providers: [ProductCategoriesResolver, ProductCategoriesService],
})
export class ProductCategoriesModule {}
