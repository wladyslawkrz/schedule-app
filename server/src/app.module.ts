import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { DatabaseModule } from './modules/database/database.module';
import { SubjectModule } from './modules/subject/subject.module';
import { LecturerModule } from './modules/lecturer/lecturer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ScheduleModule,
    SubjectModule,
    LecturerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
