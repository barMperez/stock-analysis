import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { Logger } from '@nestjs/common';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(private readonly model: Model<TDocument>) {}

  async create(data: Omit<TDocument, '_id'>): Promise<TDocument> {
    const creadedDocument = new this.model({
      ...data,
      _id: new Types.ObjectId(),
    });
    return (await creadedDocument.save()).toJSON() as unknown as TDocument;
  }

  async findById(id: string): Promise<TDocument | null> {
    const document = await this.model.findById(id).lean<TDocument>(true);
    if (!document) {
      this.logger.warn(`Document with id ${id} not found`);
    }
    return document;
  }

  async update(
    id: string,
    data: UpdateQuery<TDocument>,
  ): Promise<TDocument | null> {
    const document = await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean<TDocument>(true);

    if (!document) {
      this.logger.warn(`Document with id ${id} not found`);
    }
    return document;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.find(filterQuery).lean<TDocument>(true);
    if (!document) {
      this.logger.warn(`Document with filter ${filterQuery} not found`);
    }
    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    const documents = await this.model
      .find(filterQuery)
      .lean<TDocument[]>(true);
    if (!documents) {
      this.logger.warn(`Documents with filter ${filterQuery} not found`);
    }
    return documents;
  }

  async findAll(): Promise<TDocument[]> {
    const documents = await this.model.find().lean<TDocument[]>(true);
    if (!documents) {
      this.logger.warn(`Documents not found`);
    }
    return documents;
  }

  async delete(id: string): Promise<void> {
    await this.model.findOneAndDelete({ _id: id });
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<TDocument | null> {
    return this.model.findOneAndDelete(filterQuery).lean<TDocument>(true);
  }
}
