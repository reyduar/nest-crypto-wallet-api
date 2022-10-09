import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCryptoDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly name?: string;
  @IsString()
  @IsOptional()
  readonly symbol?: string;
  @IsNumber()
  @IsOptional()
  readonly price?: number;
}
