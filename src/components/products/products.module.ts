import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './schemas/product.model';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
	imports: [SequelizeModule.forFeature([Product])],
	providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
