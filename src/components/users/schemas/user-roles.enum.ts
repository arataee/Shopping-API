export enum Role {
	Admin = 'Admin',
	User = 'User',
	Default = User,
}

export const RolesArr = [...new Set(Object.values(Role))];
