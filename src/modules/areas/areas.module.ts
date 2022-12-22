import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { areaSchema } from './entities/area.entity';
import { AreaRepositoryService } from 'src/repositories/areas.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Areas', schema: areaSchema }])],
  controllers: [AreasController],
  providers: [AreasService, AreaRepositoryService],
  exports: [AreasService, AreaRepositoryService]
})
export class AreasModule { }
