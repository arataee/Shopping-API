import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './schemas/user.model';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [SequelizeModule.forFeature([User])],
	providers: [UsersResolver, UsersService],
})
export class UsersModule {}
