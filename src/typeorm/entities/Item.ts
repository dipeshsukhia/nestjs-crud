import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class Item {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  qty: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
