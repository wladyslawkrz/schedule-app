import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerController } from './lecturer.controller';
import { LecturerProvider } from './entities/lecturer.provider';

@Module({
  controllers: [LecturerController],
  providers: [LecturerService, ...LecturerProvider],
})
export class LecturerModule {}
