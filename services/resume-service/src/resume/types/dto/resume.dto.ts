import { IsAlpha, IsDate, IsDateString, IsEnum } from 'class-validator';
import { Sex } from '..';

export class ResumeDto {
  @IsAlpha()
  firstName: string;

  @IsAlpha()
  lastName: string;

  @IsDateString()
  birthdate: string;

  @IsEnum(Sex)
  sex: Sex;
}
