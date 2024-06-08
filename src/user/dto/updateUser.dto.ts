import { IsEmail, IsString, IsStrongPassword, isString } from 'class-validator';

export class updateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
