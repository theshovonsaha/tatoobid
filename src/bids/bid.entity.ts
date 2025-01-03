import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { TattooRequest } from '../tattoo-requests/tattoo-request.entity';

export enum BidStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected'
}

@Entity('bids')
export class Bid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TattooRequest, request => request.bids)
  request: TattooRequest;

  @ManyToOne(() => User)
  artist: User;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  estimated_hours: number;

  @Column('text')
  message: string;

  @Column({
    type: 'enum',
    enum: BidStatus,
    default: BidStatus.PENDING
  })
  status: BidStatus;

  @CreateDateColumn()
  created_at: Date;
} 