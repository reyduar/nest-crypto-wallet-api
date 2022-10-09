import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Crypto } from './interfaces/crypto.interface';
import { v4 as uuid } from 'uuid';
import { eq, filter, find } from 'lodash';
import { UpdateCryptoDto, CreateCryptoDto } from './dtos';

@Injectable()
export class CryptosService {
  private cryptos: Crypto[] = [];

  create(crypto: CreateCryptoDto) {
    const existCrypto = find(this.cryptos, (c: Crypto) =>
      eq(c.name, crypto.name),
    );
    if (existCrypto) {
      throw new BadRequestException(
        `This crypto: '${crypto.name}' already exist!`,
      );
    } else {
      const newCrypto = { ...crypto, id: uuid() };
      this.cryptos.push(newCrypto);
      return newCrypto;
    }
  }

  update(id: string, crypto: UpdateCryptoDto) {
    const cryptoDB = this.findById(id);
    if (cryptoDB) {
      const newObj = {
        id,
        name: crypto?.name || cryptoDB.name,
        symbol: crypto?.symbol || cryptoDB.symbol,
        price: crypto?.price || cryptoDB.price,
      };
      this.cryptos = filter(this.cryptos, (c: Crypto) => !eq(c.id, id));
      this.cryptos.push(newObj);
      return newObj;
    } else {
      throw new NotFoundException(`This crypto not found!`);
    }
  }

  delete(id: string) {
    const deleteCrypto = this.findById(id);
    if (deleteCrypto) {
      this.cryptos = filter(this.cryptos, (c: Crypto) => !eq(c.id, id));
      return { message: 'Success' };
    } else {
      throw new NotFoundException(`This crypto not found!`);
    }
  }

  findAll() {
    return this.cryptos;
  }

  findById(id: string) {
    const crypto = this.cryptos.find((c: Crypto) => eq(c.id, id));
    if (!crypto)
      throw new NotFoundException(`This crypto Id: '${id}' not found!`);

    return crypto;
  }

  fillCryptosWithSeedData(cryptos: Crypto[]) {
    this.cryptos = cryptos;
  }
}
