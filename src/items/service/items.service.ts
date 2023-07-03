import { Injectable } from '@nestjs/common';
//import { Item } from '../interface/item.interface';
import { Item } from '../../typeorm/entities/Item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemParams } from '../type/ItemParams';
import { time } from 'console';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  private items: Item[] = [];

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    return await this.itemRepository.findOne({
      where: [{ id: id }],
    });
  }

  async create(itemDetails: ItemParams): Promise<Item> {
    const newItem = this.itemRepository.create({
      ...itemDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.itemRepository.save(newItem);
  }

  async update(id: number, itemDetails: ItemParams): Promise<Item> {
    this.itemRepository.update(
      { id },
      { ...itemDetails, updatedAt: new Date() },
    );
    return await this.findOne(id);
  }

  async delete(id: number): Promise<Item> {
    const item = this.findOne(id);
    this.itemRepository.delete({ id });
    return item;
  }
}
