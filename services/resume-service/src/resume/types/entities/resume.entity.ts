import { Column, Model, PrimaryKey, Table, IsUUID } from 'sequelize-typescript';
import { Sex } from '../enums';

@Table
export class Resume extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  birthdate: Date;

  @Column
  sex: Sex;
}
