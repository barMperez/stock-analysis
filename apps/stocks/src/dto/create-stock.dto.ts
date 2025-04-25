import { IsNotEmpty, IsString } from "class-validator";

export class CreateStockDto {
    @IsString()
    @IsNotEmpty()
    symbol: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    exchange: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    sector: string;

    @IsString()
    @IsNotEmpty()
    industry: string;
}
