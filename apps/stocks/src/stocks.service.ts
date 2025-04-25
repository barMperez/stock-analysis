import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { StocksRepository } from './stocks.repository';

@Injectable()
export class StocksService {
  constructor(private readonly stocksRepository: StocksRepository) 
  {}
  create(createStockDto: CreateStockDto) {
    return this.stocksRepository.create({
      ...createStockDto,
      timestamp: new Date(),
    });
  }

  findAll() {
    return this.stocksRepository.findAll();
  }

  findOne(_id: string) {
    return this.stocksRepository.findOne({_id});
  }

  update(_id: string, updateStockDto: UpdateStockDto) {
    return this.stocksRepository.update(_id, {
      $set: updateStockDto
    });
  }

  remove(_id: string) {
    return this.stocksRepository.delete(_id);
  }
}
