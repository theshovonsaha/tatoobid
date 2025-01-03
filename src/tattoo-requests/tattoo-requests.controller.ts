import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Param, 
  UseInterceptors, 
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { TattooRequestsService } from './tattoo-requests.service';
import { CreateTattooRequestDto } from './dto/create-tattoo-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('tattoo-requests')
@Controller('tattoo-requests')
@UseGuards(JwtAuthGuard)
export class TattooRequestsController {
  constructor(private readonly tattooRequestsService: TattooRequestsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 5))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateTattooRequestDto,
  })
  async create(
    @Body() createDto: CreateTattooRequestDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.tattooRequestsService.create(createDto, files);
  }

  @Get()
  async findAll() {
    return this.tattooRequestsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tattooRequestsService.findOne(id);
  }
} 