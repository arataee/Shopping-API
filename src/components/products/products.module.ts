import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './entities/product.model';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
	imports: [SequelizeModule.forFeature([Products])],
	providers: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
