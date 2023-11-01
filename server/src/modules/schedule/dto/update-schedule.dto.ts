import { IsBoolean, IsEnum, IsInt, IsOptional } from 'class-validator';
import { DayOfWeek, LessonTime } from 'src/common/enums';

export class UpdateScheduleDto {
  @IsInt()
  @IsOptional()
  subjectId: number;

  @IsBoolean()
  @IsOptional()
  isTopWeek: boolean;

  @IsEnum(DayOfWeek)
  @IsOptional()
  dayOfWeek: DayOfWeek;

  @IsEnum(LessonTime)
  @IsOptional()
  lessonTime: LessonTime;
}
