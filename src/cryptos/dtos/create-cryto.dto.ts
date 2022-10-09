import { IsNumber, IsString } from 'class-validator';

export class CreateCryptoDto {
  readonly id: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly symbol: string;
  @IsNumber()
  readonly price: number;
}
