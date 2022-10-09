import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { UpdateCryptoDto, CreateCryptoDto } from './dtos';

@Controller('cryptos')
export class CryptosController {
  constructor(private readonly cryptosService: CryptosService) {}

  @Get()
  getAllCryptos() {
    return this.cryptosService.findAll();
  }

  @Get(':id')
  getCryptoById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.cryptosService.findById(id);
  }

  @Post()
  createCrypto(@Body() paylaod: CreateCryptoDto) {
    return this.cryptosService.create(paylaod);
  }

  @Patch(':id')
  updateCrypto(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() paylaod: UpdateCryptoDto,
  ) {
    return this.cryptosService.update(id, paylaod);
  }

  @Delete(':id')
  deleteCrypto(@Param('id', ParseUUIDPipe) id: string) {
    return this.cryptosService.delete(id);
  }
}
