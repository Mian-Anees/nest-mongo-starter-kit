import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseCode, ResponseMessage } from 'src/utils/enums/enum';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto, @Res() res: Response) {
    try {

      await this.addressesService.create(createAddressDto);

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

      let result = await this.addressesService.findAll();

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

  @Get(':city')
  async findOne(@Param('city') id: string, @Res() res: Response) {
    try {

      const result = await this.addressesService.findOne(id);

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
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
