import { Injectable } from '@nestjs/common';
import { Item } from '../../typeorm/entities/Item';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemParams } from '../type/ItemParams';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

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

  async update(id: number, itemDetails: ItemParams): Promise<boolean> {
    return this.itemRepository
      .update({ id }, { ...itemDetails, updatedAt: new Date() })
      .then((result) => {
        return result.affected !== 0;
      });
  }

  async delete(id: number): Promise<boolean> {
    return this.itemRepository.delete({ id }).then((result) => {
      return result.affected !== 0;
    });
  }
}
