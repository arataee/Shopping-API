import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { SequelizeModule, getModelToken } from '@nestjs/sequelize';
import { Products } from './schemas/product.model';

describe('ProductsService', () => {
	let service: ProductsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				SequelizeModule.forRoot({
					dialect: 'sqlite',
					storage: 'db.db',
					autoLoadModels: true,
					synchronize: true,
					sync: {},
				}),
				SequelizeModule.forFeature([Products]),
			],
			providers: [ProductsService],
		}).compile();
		service = module.get<ProductsService>(ProductsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('create()', () => {
		it('should successfully insert a user', async () => {
			const data = await service.create({
				name: 'name #1',
			});
			expect(data).toEqual(4);
		});
	});

	// describe('findAll()', () => {
	//   it('should return an array of users', async () => {
	//     const users = await service.findAll();
	//     expect(users).toEqual(usersArray);
	//   });
	// });

	// describe('findOne()', () => {
	//   it('should get a single user', () => {
	//     const findSpy = jest.spyOn(model, 'findOne');
	//     expect(service.findOne(1));
	//     expect(findSpy).toBeCalledWith({ where: { id: '1' } });
	//   });
	// });

	// describe('remove()', () => {
	//   it('should remove a user', async () => {
	//     const findSpy = jest.spyOn(model, 'findOne').mockReturnValue({
	//       destroy: jest.fn(),
	//     } as any);
	//     const retVal = await service.remove(2);
	//     expect(findSpy).toBeCalledWith({ where: { id: '2' } });
	//     expect(retVal).toBeUndefined();
	//   });
	// });
});
