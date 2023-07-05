import { Injectable } from '@nestjs/common';
import { Item } from '../../typeorm/entities/Item';
import { ItemParams } from '../type/ItemParams';
import { ItemRepository } from '../repository/items.repository';

@Injectable()
export class ItemsService {
  constructor(private itemRepository: ItemRepository) {}

  findAll(): Promise<Item[]> {
    return this.itemRepository.findAll();
  }

  findOne(id: number): Promise<Item> {
    return this.itemRepository.findById(id);
  }

  create(itemDetails: ItemParams): Promise<Item> {
    return this.itemRepository.createItem(itemDetails);
  }

  update(id: number, itemDetails: ItemParams): Promise<boolean> {
    return this.itemRepository.updateItem(id, itemDetails);
  }

  delete(id: number): Promise<boolean> {
    return this.itemRepository.deleteItem(id);
  }
}
