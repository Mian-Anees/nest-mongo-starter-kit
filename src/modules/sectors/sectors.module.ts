import { Module } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';

@Module({
  controllers: [SectorsController],
  providers: [SectorsService]
})
export class SectorsModule {}
