import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import components from '../../src/components';
import { GraphQLModule } from '@nestjs/graphql';
import { DefaultAdminUser } from '../../src/utils/admin-user';
import { GraphQLErrorFormat } from '../../src/utils/exceptions';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env.test',
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			autoLoadModels: true,
			synchronize: true,
			sync: { force: true },
			logging: false,
		}),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gql',
			formatError: GraphQLErrorFormat,
		}),
		...components,
	],
	providers: [DefaultAdminUser],
})
export class TestModule {}
