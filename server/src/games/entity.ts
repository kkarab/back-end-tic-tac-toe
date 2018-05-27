import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { IsString, MinLength, IsEnum, IsArray } from 'class-validator';

enum Colors {red,green,blue,yellow,magenta}

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(4)
  @Column('text', {nullable:false})
  Name: string

  @IsEnum(Colors)
  @Column('text', {nullable:false})
  Color: Colors

  @IsArray()
  @Column('json', {nullable:false})
  Board: Array<Array<string>>

}