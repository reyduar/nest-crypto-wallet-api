import { Module } from '@nestjs/common';
import { CryptosModule } from './cryptos/cryptos.module';
import { WalletsModule } from './wallets/wallets.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CryptosModule, WalletsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
