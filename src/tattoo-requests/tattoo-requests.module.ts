import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TattooRequestsController } from './tattoo-requests.controller';
import { TattooRequestsService } from './tattoo-requests.service';
import { TattooRequest } from './tattoo-request.entity';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TattooRequest]),
    SharedModule,
  ],
  controllers: [TattooRequestsController],
  providers: [TattooRequestsService],
  exports: [TattooRequestsService],
})
export class TattooRequestsModule {} 