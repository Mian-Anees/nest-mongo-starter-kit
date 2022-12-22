import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { addressSchema } from './entities/address.entity';
import { AddressesRepositoryService } from 'src/repositories/addresses.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Addresses', schema: addressSchema }])],
  controllers: [AddressesController],
  providers: [AddressesService, AddressesRepositoryService],
  exports: [AddressesService, AddressesRepositoryService]
})
export class AddressesModule { }
