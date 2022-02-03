import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Media } from './schemas/media.model';
import { MediaService } from './media.service';
import { MediaResolver } from './media.resolver';

@Module({
	imports: [SequelizeModule.forFeature([Media])],
	providers: [MediaResolver, MediaService],
})
export class MediaModule {}
