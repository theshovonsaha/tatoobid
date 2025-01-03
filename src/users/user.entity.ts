import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  full_name: string;

  @Column()
  user_type: 'client' | 'artist';

  @Column({ nullable: true })
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
} 