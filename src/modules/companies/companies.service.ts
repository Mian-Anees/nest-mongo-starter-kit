import { Injectable } from '@nestjs/common';
import { CreateCompaniesDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  create(createCompaniesDto: CreateCompaniesDto) {
    return 'This action adds a new vendor';
  }

  findAll() {
    return `This action returns all vendors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateCompanyDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
