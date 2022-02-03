import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './schemas/comment.model';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';

@Module({
	imports: [SequelizeModule.forFeature([Comment])],
	providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}
