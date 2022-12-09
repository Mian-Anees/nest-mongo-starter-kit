import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompaniesDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly compnayService: CompaniesService) { }

  @Post()
  create(@Body() createVendorDto: CreateCompaniesDto) {
    return this.compnayService.create(createVendorDto);
  }

  @Get()
  findAll() {
    return this.compnayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compnayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: CreateCompaniesDto) {
    return this.compnayService.update(+id, updateVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compnayService.remove(+id);
  }
}
