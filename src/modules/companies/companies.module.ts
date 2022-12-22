import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { CompaniesRepositoryService } from 'src/repositories/companies.repository';
import { Companies, companySchema } from './entities/company.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Companies", schema: companySchema }])],
  controllers: [CompaniesController],
  providers: [CompaniesService, CompaniesRepositoryService]
})
export class CompaniesModule { }
