import {
  Column,
  Model,
  PrimaryKey,
  Table,
  IsUUID,
  Default,
  DataType,
} from 'sequelize-typescript';
import { Sex } from '../enums';

@Table
export class Resume extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  birthdate: string;

  @Column
  sex: Sex;
}
