import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { SubjectProvider } from './entities/subject.provider';

@Module({
  controllers: [SubjectController],
  providers: [SubjectService, ...SubjectProvider],
})
export class SubjectModule {}
