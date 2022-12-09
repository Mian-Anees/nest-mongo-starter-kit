import { Injectable } from "@nestjs/common";
import { CreateCompaniesDto } from "src/modules/companies/dto/create-company.dto";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";

@Injectable()
export class CompanyRepositoryService {
  create(createCompany: CreateCompaniesDto) {
    return 'This action adds a new user';
  }
}