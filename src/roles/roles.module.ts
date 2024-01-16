import { Module } from '@nestjs/common'
import { RolesController } from './roles.controller'
import { RolesService } from './roles.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Roles } from './roles.model'
import { User } from 'src/users/user.model'
import { UserRole } from './user-roles.model'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Roles, User, UserRole])],
  exports: [RolesService]
})
export class RolesModule {}
