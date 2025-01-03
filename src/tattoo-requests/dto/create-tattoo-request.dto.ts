import { IsNotEmpty, IsString, IsArray, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTattooRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  size_cm: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  placement_area: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  color_scheme?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  budget_range: string;

  @ApiProperty()
  @IsDateString()
  preferred_schedule: string;
} 