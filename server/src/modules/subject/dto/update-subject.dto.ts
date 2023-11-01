import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateSubjectDto {
  @IsOptional()
  @IsString()
  subjectName: string;

  @IsOptional()
  @IsInt()
  lecturerId: number;
}
