import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user.model'
import { Roles } from 'src/roles/roles.model'
import { UserRole } from 'src/roles/user-roles.model'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Roles, UserRole])]
})
export class UsersModule {}
