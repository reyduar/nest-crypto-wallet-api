import { v4 as uuid } from 'uuid';
import { Crypto } from '../../cryptos/interfaces/crypto.interface';

export const CRYPTOS_SEED: Crypto[] = [
  { id: uuid(), name: 'Bitcoin', symbol: 'BTC', price: 20126 },
  { id: uuid(), name: 'Cardano', symbol: 'ADA', price: 0 },
  { id: uuid(), name: 'Solana', symbol: 'SOL', price: 34 },
  { id: uuid(), name: 'Etherum', symbol: 'ETC', price: 1200 },
];
