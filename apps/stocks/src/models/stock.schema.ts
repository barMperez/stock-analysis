import { AbstractDocument } from "@common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class StockDocument extends AbstractDocument {
    @Prop()
    timestamp: Date;
    @Prop()
    symbol: string;
    @Prop()
    name: string;
    @Prop()
    description: string;
    @Prop()
    exchange: string;
    @Prop()
    type: string;
    @Prop()
    currency: string;
    @Prop()
    country: string;
    @Prop()
    sector: string;
    @Prop()
    industry: string;
}

export const StockSchema = SchemaFactory.createForClass(StockDocument);