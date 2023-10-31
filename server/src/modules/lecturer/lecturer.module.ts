import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerController } from './lecturer.controller';
import { LecturerProvider } from './entities/lecturer.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [LecturerController],
  imports: [DatabaseModule],
  providers: [LecturerService, ...LecturerProvider],
})
export class LecturerModule {}
