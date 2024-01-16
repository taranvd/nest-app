import { ApiProperty } from '@nestjs/swagger/dist'
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'user email' })
  @IsEmail({}, { message: 'incorrect email' })
  @IsString({ message: 'must be a string' })
  readonly email: string

  @ApiProperty({ example: 'Sd2f%45gea@', description: 'user password' })
  @IsString({ message: 'must be a string' })
  @Length(4, 16, { message: 'should be no less than 4 and no more than 16' })
  readonly password: string
}
