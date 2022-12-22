import { HttpException, Inject, Injectable } from '@nestjs/common';
import { AddressesRepositoryService } from 'src/repositories/addresses.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(
    private readonly addressRepository: AddressesRepositoryService) {
  }

  async create(createAddressDto: CreateAddressDto) {
    try {
      return this.addressRepository.createAddress(createAddressDto);
    } catch (error) {
      console.error(error)
      throw error;
    }
  }

  async findAll() {
    try {
      return this.addressRepository.findAllAddresses();
    } catch (error) {
      throw error
    }
  }

  async findOne(city: string) {
    try {
      return this.addressRepository.findByCity(city)
    } catch (error) {
      throw error
    }

  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
