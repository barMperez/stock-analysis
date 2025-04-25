import { Test, TestingModule } from '@nestjs/testing';
import { StocksService } from './stocks.service';
import { StocksRepository } from './stocks.repository';

describe('StocksService', () => {
  let service: StocksService;
  let mockRepository: Partial<StocksRepository>;

  beforeEach(async () => {
    mockRepository = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StocksService,
        { provide: StocksRepository, useValue: mockRepository }, // Mocking StocksRepository
      ],
    }).compile();

    service = module.get<StocksService>(StocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository create method', async () => {
    const createStockDto = { name: 'AAPL', price: 150 };
    await service.create(createStockDto as any);
    expect(mockRepository.create).toHaveBeenCalledWith({
      ...createStockDto,
      timestamp: expect.any(Date),
    });
  });
});