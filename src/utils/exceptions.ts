import {
	Catch,
	HttpException,
	InternalServerErrorException,
	BadRequestException,
} from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { ForeignKeyConstraintError, UniqueConstraintError } from 'sequelize';
import { GraphQLError } from 'graphql';

@Catch(ForeignKeyConstraintError, UniqueConstraintError)
class ORMExceptionFilter implements GqlExceptionFilter {
	catch(exception) {
		if (exception instanceof ForeignKeyConstraintError) {
			return new BadRequestException('Relation Error!');
		}
		if (exception instanceof UniqueConstraintError) {
			const errors = exception.errors.map((error) => error.message);
			return new BadRequestException(errors);
		}
	}
}

@Catch(HttpException)
class HttpExceptionFilter implements GqlExceptionFilter {
	catch(exception) {
		return exception;
	}
}

@Catch()
class AllExceptionFilter implements GqlExceptionFilter {
	catch(exception) {
		console.error(exception);
		return new InternalServerErrorException();
	}
}

export const UseAllExceptionFilters = [
	new AllExceptionFilter(),
	new ORMExceptionFilter(),
	new HttpExceptionFilter(),
];

export const GraphQLErrorFormat = (error: GraphQLError): any => {
	return error.extensions;
};
