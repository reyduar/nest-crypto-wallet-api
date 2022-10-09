// import { PartialType } from '@nestjs/mapped-types';
// import { CreateWalletDto } from './create-wallet.dto';

import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

// export class UpdateWalletDto extends PartialType(CreateWalletDto) {}

export class UpdateWalletDto {
  @IsString()
  @MinLength(5)
  readonly publicKey: string;
  @IsString()
  @MinLength(2)
  readonly account: string;
  @IsNumber()
  @IsOptional()
  readonly updateAt?: number;
}
