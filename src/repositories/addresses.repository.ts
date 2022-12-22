

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAddressDto } from "src/modules/addresses/dto/create-address.dto";
import { Address } from "src/modules/addresses/entities/address.entity";
import { Users } from "src/modules/users/entities/user.entity";

@Injectable()
export class AddressesRepositoryService {
    constructor(
        @InjectModel('Addresses') private readonly addressModel: Model<Address>
    ) { }

    async createAddress(createAddressDto: CreateAddressDto) {
        try {
            return this.addressModel.create(createAddressDto);
        } catch (error) {
            console.error(error.message)
            throw error
        }
    }

    async findAllAddresses() {
        try {
            return this.addressModel.find();
        } catch (error) {
            console.error(error.message)
            throw new Error(error.message)
        }
    }

    async findByCity(city: string) {
        try {
            return this.addressModel.findOne({ city: city });
        } catch (error) {
            console.error(error.message)
            throw new Error(error.message)
        }
    }

}