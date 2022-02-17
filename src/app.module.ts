import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import components from './components';
import { GraphQLErrorFormat } from './utils/exceptions';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			autoLoadModels: true,
			synchronize: true,
		}),
		GraphQLModule.forRoot({
			autoSchemaFile: 'schema.gql',
			formatError: GraphQLErrorFormat,
		}),
		...components,
	],
})
export class AppModule { }
