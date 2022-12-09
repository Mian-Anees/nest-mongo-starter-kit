import { PartialType } from '@nestjs/mapped-types';
import { CreateCompaniesDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompaniesDto) { }
