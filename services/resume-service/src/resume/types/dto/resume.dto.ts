import { IsAlpha, IsDate, IsEnum } from 'class-validator';
import { Sex } from '..';

export class ResumeDto {
  @IsAlpha()
  firstName: string;

  @IsAlpha()
  lastName: string;

  @IsDate()
  birthdate: Date;

  @IsEnum(Sex)
  sex: Sex;
}
