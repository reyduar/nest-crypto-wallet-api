import { Injectable } from '@nestjs/common';
import { WALLETS_SEED, CRYPTOS_SEED } from './data';
import { CryptosService } from '../cryptos/cryptos.service';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly cryptoService: CryptosService,
    private readonly walletService: WalletsService,
  ) {}
  populateDB() {
    this.cryptoService.fillCryptosWithSeedData(CRYPTOS_SEED);
    this.walletService.fillWalletsWithSeedData(WALLETS_SEED);
    return `Seed has been executed successfully!`;
  }
}
