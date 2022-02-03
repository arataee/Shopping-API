import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductMedia } from './schemas/product-media.model';
import { ProductMediaResolver } from './product-media.resolver';
import { ProductMediaService } from './product-media.service';

@Module({
	imports: [SequelizeModule.forFeature([ProductMedia])],
	providers: [ProductMediaResolver, ProductMediaService],
})
export class ProductMediaModule {}
