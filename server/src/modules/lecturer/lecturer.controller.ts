import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerDto } from './dto/lecturer.dto';

@Controller('lecturer')
export class LecturerController {
  constructor(private readonly lecturerService: LecturerService) {}

  @Post()
  async create(@Body() createLecturerDto: LecturerDto) {
    return await this.lecturerService.create(createLecturerDto);
  }

  @Get()
  async findAll() {
    return await this.lecturerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.lecturerService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLecturerDto: LecturerDto,
  ) {
    return await this.lecturerService.update(id, updateLecturerDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.lecturerService.remove(id);
  }
}
