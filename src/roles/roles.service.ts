import { Injectable } from '@nestjs/common'
import { createRoleDto } from './dto/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Roles } from './roles.model'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private roleRepository: typeof Roles) {}

  async createRole(dto: createRoleDto) {
    const role = await this.roleRepository.create(dto)
    return role
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } })
    return role
  }
}
