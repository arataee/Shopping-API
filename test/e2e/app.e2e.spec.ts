import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as SuperTest from 'supertest';
import { TestModule } from './test.module';
import queries from './queries';
import { defaultAuth } from './utils';

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let supertest: SuperTest.SuperTest<SuperTest.Test>;
	const url = '/graphql';

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [TestModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
		supertest = SuperTest(app.getHttpServer());
	});

	it.each(queries)(
		'$title',
		async ({ expectQuery, expectData, expectation, auth }) => {
			let request: SuperTest.Test = supertest.post(url);
			if (expectation) {
				return await expectation(request);
			}
			if (auth) {
				const token = await defaultAuth(supertest.post(url));
				request = request.set('Authorization', `Bearer ${token}`);
			}
			const res = await request.send({ query: expectQuery });
			return expect(res.body).toEqual(expectData);
		},
	);
});
