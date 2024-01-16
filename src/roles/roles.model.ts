import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { UserRole } from './user-roles.model'

interface RoleCreationAttrs {
  value: string
  desc: string
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'unique id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'user role' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string

  @ApiProperty({ example: 'Administrator', description: 'Desc role' })
  @Column({ type: DataType.STRING, allowNull: false })
  desc: string

  @BelongsToMany(() => User, () => UserRole)
  users: User[]
}
