import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseCode, ResponseMessage } from 'src/utils/enums/enum';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) { }

  @Post()
  async create(@Body() createAreaDto: CreateAreaDto, @Res() res: Response) {
    try {

      await this.areasService.create(createAreaDto);

      return res.status(ResponseCode.CREATED_SUCCESSFULLY).json({
        status: ResponseCode.CREATED_SUCCESSFULLY,
        message: ResponseMessage.CREATED_SUCCESSFULLY
      })

    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {

      const result = await this.areasService.findAll();

      if (!result.length) {
        return res.status(ResponseCode.CONTENT_NOT_FOUND).json({
          status: ResponseCode.CONTENT_NOT_FOUND,
          message: ResponseMessage.CONTENT_NOT_FOUND
        })
      }

      return res.status(ResponseCode.SUCCESS).json({
        status: ResponseCode.SUCCESS,
        data: result,
        message: ResponseMessage.SUCCESS
      })

    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @Get(':name')
  async findOne(@Param('name') name: string, @Res() res: Response) {
    try {

      const result = await this.areasService.findOne(name);

      if (!result) {
        return res.status(ResponseCode.CONTENT_NOT_FOUND).json({
          status: ResponseCode.CONTENT_NOT_FOUND,
          message: ResponseMessage.CONTENT_NOT_FOUND
        })
      }

      return res.status(ResponseCode.SUCCESS).json({
        status: ResponseCode.SUCCESS,
        data: result,
        message: ResponseMessage.SUCCESS
      })

    } catch (error) {
      throw new HttpException(error.message, ResponseCode.BAD_REQUEST)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areasService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.areasService.remove(+id);
  }
}
