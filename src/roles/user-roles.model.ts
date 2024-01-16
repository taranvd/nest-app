import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Roles } from './roles.model'
import { User } from 'src/users/user.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ForeignKey(() => Roles)
  @Column({ type: DataType.INTEGER })
  roleId: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number
}
