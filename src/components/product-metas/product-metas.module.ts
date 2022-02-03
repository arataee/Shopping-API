import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductMeta } from './schemas/product-metas.model';
import { ProductMetasResolver } from './product-metas.resolver';
import { ProductMetasService } from './product-metas.service';

@Module({
	imports: [SequelizeModule.forFeature([ProductMeta])],
	providers: [ProductMetasResolver, ProductMetasService],
})
export class ProductMetasModule {}
