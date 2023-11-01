import { IsBoolean, IsEnum, IsInt } from 'class-validator';
import { DayOfWeek, LessonTime } from 'src/common/enums';

export class CreateScheduleDto {
  @IsInt()
  subjectId: number;

  @IsBoolean()
  isTopWeek: boolean;

  @IsEnum(DayOfWeek)
  dayOfWeek: DayOfWeek;

  @IsEnum(LessonTime)
  lessonTime: LessonTime;
}
