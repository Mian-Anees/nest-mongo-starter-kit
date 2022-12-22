import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAddressDto } from "src/modules/addresses/dto/create-address.dto";
import { CreateAreaDto } from "src/modules/areas/dto/create-area.dto";
import { Area } from "src/modules/areas/entities/area.entity";

@Injectable()
export class AreaRepositoryService {
    constructor(
        @InjectModel('Areas') private readonly areaModel: Model<Area>
    ) { }

    async createArea(createAreaDto: CreateAreaDto) {
        try {
            return this.areaModel.create(createAreaDto);
        } catch (error) {
            console.error(error.message)
            throw error
        }
    }

    async findAllAreas() {
        try {
            return this.areaModel.find();
        } catch (error) {
            console.error(error.message)
            throw new Error(error.message)
        }
    }

    async findByName(name: string) {
        try {
            return this.areaModel.findOne({ name: name });
        } catch (error) {
            console.error(error.message)
            throw new Error(error.message)
        }
    }

}