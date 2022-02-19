import { Test } from 'supertest';

export interface Queries {
	title: string;
	expectQuery: string;
	expectData: object;
	expectation?: (request: Test) => Promise<any>;
	auth?: boolean;
}

export const defaultAuth = async (request: Test): Promise<string> => {
	const query = `
	mutation {
		login(input: { email: "${process.env.ADMIN_EMAIL}", password: "${process.env.ADMIN_PASSWORD}" }) {
			access_token
			sub
		}
	}
	`;
	const res = await request.send({ query });
	const token = res.body.data.login.access_token;
	return token;
};
