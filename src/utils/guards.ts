import {
	applyDecorators,
	CanActivate,
	ExecutionContext,
	Injectable,
	SetMetadata,
	UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtAuthGuard } from '../components/auth/guards/jwt-auth.guard';
import { Role } from '../components/users/schemas/user-roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const ctx = GqlExecutionContext.create(context);
		const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()],
		);
		if (!requiredRoles) {
			return true;
		}
		const user = ctx.getContext().req.user;
		return requiredRoles.includes(user.role);
	}
}

export function Auth(...roles: Role[]) {
	return applyDecorators(
		SetMetadata('roles', roles),
		UseGuards(JwtAuthGuard, RolesGuard),
	);
}
