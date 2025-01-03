import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TattooRequest } from './tattoo-request.entity';
import { CreateTattooRequestDto } from './dto/create-tattoo-request.dto';
import { S3Service } from '../shared/s3.service';

@Injectable()
export class TattooRequestsService {
  constructor(
    @InjectRepository(TattooRequest)
    private tattooRequestsRepository: Repository<TattooRequest>,
    private s3Service: S3Service,
  ) {}

  async create(createDto: CreateTattooRequestDto, files: Express.Multer.File[]) {
    const imageUrls = await Promise.all(
      files.map(file => this.s3Service.uploadFile(file))
    );

    const tattooRequest = this.tattooRequestsRepository.create({
      ...createDto,
      reference_image_urls: imageUrls,
    });

    return this.tattooRequestsRepository.save(tattooRequest);
  }

  async findAll(filters: any) {
    return this.tattooRequestsRepository.find({
      where: filters,
      relations: ['client', 'bids', 'bids.artist'],
    });
  }

  async findOne(id: string) {
    return this.tattooRequestsRepository.findOne({
      where: { id },
      relations: ['client', 'bids', 'bids.artist'],
    });
  }
} 