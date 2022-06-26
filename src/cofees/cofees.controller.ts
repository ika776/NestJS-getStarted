import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CofeesService } from './cofees.service';
import { UpdateCofeeDto } from './dto/update-cofee.dto';
import { CeateCofeeDto } from './dto/ceate-cofee.dto';

@Controller('cofees')
export class CofeesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly cofeesService: CofeesService) { }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.cofeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id);

    return this.cofeesService.findOne('' + id);
  }

  @Post()
  create(@Body() ceateCofeeDto: CeateCofeeDto) {
    console.log(ceateCofeeDto instanceof CeateCofeeDto);

    return this.cofeesService.create(ceateCofeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCofeeDto: UpdateCofeeDto) {
    return this.cofeesService.update(id, updateCofeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cofeesService.remove(id);
  }
}