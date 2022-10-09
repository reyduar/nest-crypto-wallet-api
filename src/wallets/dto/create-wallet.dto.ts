import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  @MinLength(5)
  readonly publicKey: string;
  @IsString()
  @MinLength(2)
  readonly account: string;
  @IsNumber()
  @IsOptional()
  readonly createdAt?: number;
}
