import { ApiProperty } from '@nestjs/swagger/dist'

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'user email' })
  readonly email: string

  @ApiProperty({ example: 'Sd2f%45gea@', description: 'user password' })
  readonly password: string
}
