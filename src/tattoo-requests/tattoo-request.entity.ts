import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Bid } from '../bids/bid.entity';

export enum TattooRequestStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

@Entity('tattoo_requests')
export class TattooRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  client: User;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  size_cm: string;

  @Column()
  placement_area: string;

  @Column('text', { array: true })
  reference_image_urls: string[];

  @Column()
  budget_range: string;

  @Column({ type: 'date' })
  preferred_schedule: Date;

  @Column({
    type: 'enum',
    enum: TattooRequestStatus,
    default: TattooRequestStatus.OPEN
  })
  status: TattooRequestStatus;

  @OneToMany(() => Bid, bid => bid.request)
  bids: Bid[];

  @CreateDateColumn()
  created_at: Date;
} 