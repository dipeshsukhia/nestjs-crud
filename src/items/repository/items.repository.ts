import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/typeorm/entities/Item';
import { Repository } from 'typeorm';
import { ItemParams } from '../type/ItemParams';

export class ItemRepository extends Repository<Item> {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {
    super(
      itemRepository.target,
      itemRepository.manager,
      itemRepository.queryRunner,
    );
  }
  async findAll(): Promise<Item[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Item> {
    return await this.itemRepository.findOne({
      where: [{ id: id }],
    });
  }

  async createItem(itemDetails: ItemParams): Promise<Item> {
    const newItem = this.create({
      ...itemDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.save(newItem);
  }

  async updateItem(id: number, itemDetails: ItemParams): Promise<boolean> {
    return await this.itemRepository
      .update({ id }, { ...itemDetails, updatedAt: new Date() })
      .then((result) => {
        return result.affected !== 0;
      });
  }

  async deleteItem(id: number): Promise<boolean> {
    return await this.itemRepository.delete({ id }).then((result) => {
      return result.affected !== 0;
    });
  }
}
