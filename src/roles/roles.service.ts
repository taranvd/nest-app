import { Injectable } from '@nestjs/common'
import { createRoleDto } from './dto/create-role.dto'

@Injectable()
export class RolesService {
  constructor() {}

  async createRole(dto: createRoleDto) {}

  async getRoleByValue() {}
}
