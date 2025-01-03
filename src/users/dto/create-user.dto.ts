import { IsEmail, IsNotEmpty, IsString, MinLength, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserType {
  CLIENT = 'client',
  ARTIST = 'artist'
}

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({ enum: UserType })
  @IsEnum(UserType)
  user_type: UserType;

  @ApiProperty({ required: false })
  @IsString()
  phone?: string;
} 