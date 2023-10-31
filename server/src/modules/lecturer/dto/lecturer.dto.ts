import { IsString } from 'class-validator';

export class LecturerDto {
  @IsString()
  fullName: string;
}
