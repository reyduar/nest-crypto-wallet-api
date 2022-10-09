import { v4 as uuid } from 'uuid';
import { Wallet } from '../../wallets/entities/wallet.entity';

export const WALLETS_SEED: Wallet[] = [
  {
    id: uuid(),
    publicKey: uuid(),
    account: 'Nexo',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    publicKey: uuid(),
    account: 'Kucoin',
    createdAt: new Date().getTime(),
  },
];
