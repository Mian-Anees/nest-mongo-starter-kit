import { Injectable } from '@nestjs/common';
import { AreaRepositoryService } from 'src/repositories/areas.repository';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreasService {

  constructor(private readonly areasRepositoryService: AreaRepositoryService) {
  }

  async create(createAreaDto: CreateAreaDto) {
    try {
      return this.areasRepositoryService.createArea(createAreaDto)
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    try {
      return this.areasRepositoryService.findAllAreas();
    } catch (error) {
      throw error
    }
  }

  findOne(name: string) {
    try {
      return this.areasRepositoryService.findByName(name)
    } catch (error) {
      throw error
    }
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
