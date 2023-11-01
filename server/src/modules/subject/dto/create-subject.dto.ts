import { IsInt, IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  subjectName: string;

  @IsInt()
  lecturerId: number;
}
