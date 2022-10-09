import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { eq, filter, find } from 'lodash';
import { v4 as uuid } from 'uuid';
import { CreateWalletDto, UpdateWalletDto } from './dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletsService {
  private wallets: Wallet[] = [];

  create(createWalletDto: CreateWalletDto) {
    const walletDB = find(this.wallets, (c: Wallet) =>
      eq(c.publicKey, createWalletDto.publicKey),
    );
    if (walletDB) {
      throw new BadRequestException(
        `This wallet: '${createWalletDto.publicKey}' already exist!`,
      );
    } else {
      const newWallet = {
        ...createWalletDto,
        id: uuid(),
        createdAt: new Date().getTime(),
      };
      this.wallets.push(newWallet);
      return newWallet;
    }
  }

  findAll() {
    return this.wallets;
  }

  findOne(id: string) {
    const w = this.wallets.find((c: Wallet) => eq(c.id, id));
    if (!w) throw new NotFoundException(`This wallet Id: '${id}' not found!`);

    return w;
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    const walletDB = this.findOne(id);
    if (walletDB) {
      this.wallets = this.wallets.map((item: Wallet) => {
        if (eq(item.id, id)) {
          return {
            ...item,
            ...updateWalletDto,
            updatedAt: new Date().getTime(),
          };
        }
        return item;
      });
      return this.findOne(id);
    } else {
      throw new NotFoundException(`Wallet not found!`);
    }
  }

  remove(id: string) {
    const walletDB = this.findOne(id);
    if (walletDB) {
      this.wallets = filter(this.wallets, (c: Wallet) => !eq(c.id, id));
      return { message: 'Success' };
    } else {
      throw new NotFoundException(`This wallet not found!`);
    }
  }

  fillWalletsWithSeedData(wallets: Wallet[]) {
    this.wallets = wallets;
  }
}
