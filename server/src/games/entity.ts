import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { IsString, MinLength, IsArray } from 'class-validator';
import {_} from 'underscore';

const colors = ["red","green","blue","yellow","magenta"]

const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(4)
  @Column('text', {nullable:false})
  Name: string

  @IsString()
  @Column('text', {nullable:false})
  Color: string

  @IsArray()
  @Column('json', {nullable:false})
  Board: Array<Array<string>>

  async initColor() {
      this.Color = _.sample(colors)
  }

  async initBoard() {
      this.Board = defaultBoard
  }
}