import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './schemas/user.model';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [JwtModule.register({}), SequelizeModule.forFeature([User])],
	providers: [UsersResolver, UsersService],
})
export class UsersModule {}
