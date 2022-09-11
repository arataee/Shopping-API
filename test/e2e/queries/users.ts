import { Queries } from '../utils';

const fragment = `{ id name email phone address role }`;
const input = `{ name: "user" email: "test@email.com" password: "A123456z" phone: "+989171234567" address: "test" role: User }`;

// Create
export const user_create_auth: Queries = {
	title: 'Users > Create > Auth Error',
	expectQuery: `mutation { createUser( input: ${input} ) ${fragment} }`,
	expectData: {
		errors: [expect.anything()],
		data: null,
	},
};
export const user_create_validation = {
	title: 'Users > Create > Validation Error',
	expectQuery: '',
	expectData: { errors: {}, data: {} },
	auth: true,
};
export const user_create_uniqueEmail = {
	title: 'Users > Create > Unique Email Error',
	expectQuery: '',
	expectData: { errors: {}, data: {} },
	auth: true,
};
export const user_create: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};

// Find
export const user_find: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_find_notFound: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_findAll: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};

// Update
export const user_update_auth: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_update_notFound: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_update_validation: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_update: Queries = {
	title: 'Users > Create > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};

// Delete
export const user_delete_auth: Queries = {
	title: 'Users > Delete > Auth Error',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_delete_notFound: Queries = {
	title: 'Users > Delete > Not Found Error',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
export const user_delete: Queries = {
	title: 'Users > Delete > OK',
	expectQuery: user_create_auth.expectQuery,
	expectData: {
		data: {
			createUser: expect.anything(),
		},
	},
	auth: true,
};
