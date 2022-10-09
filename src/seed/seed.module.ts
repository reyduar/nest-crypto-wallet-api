import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { WalletsModule } from '../wallets/wallets.module';
import { CryptosModule } from '../cryptos/cryptos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [WalletsModule, CryptosModule],
})
export class SeedModule {}
