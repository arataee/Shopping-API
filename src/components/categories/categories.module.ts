import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './schemas/category.model';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';

@Module({
	imports: [SequelizeModule.forFeature([Category])],
	providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
