import { AbstractRepository } from "@common";
import { Injectable, Logger } from "@nestjs/common";
import { StockDocument } from "./models/stock.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class StocksRepository extends AbstractRepository<StockDocument> {
    protected readonly logger: Logger  = new Logger(StocksRepository.name);

    constructor(@InjectModel(StocksRepository.name) stockModel: Model<StockDocument>) {
        super(stockModel);
    }


}