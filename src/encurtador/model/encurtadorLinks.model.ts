import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({
  timestamps: true,
})
export class EncurtadorLinks extends Model<EncurtadorLinks> {

  
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;
  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @ApiProperty()
  @Column({
    type: DataType.DATE,

  })
  dateExpiry: Date;

  @Column({
    type: DataType.DATE,

  })
  createdAt: Date

  @Column({
    type: DataType.DATE,

  })
  updatedAt: Date


}