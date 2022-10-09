import { Module } from '@nestjs/common';
import { CryptosController } from './cryptos.controller';
import { CryptosService } from './cryptos.service';

@Module({
  controllers: [CryptosController],
  providers: [CryptosService],
  exports: [CryptosService],
})
export class CryptosModule {}
