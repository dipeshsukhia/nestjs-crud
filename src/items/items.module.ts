import { Module } from '@nestjs/common';
import { ItemsController } from './controller/items.controller';
import { ItemsService } from './service/items.service';
import { Item } from '../typeorm/entities/Item';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './repository/items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [ItemsService, ItemRepository],
})
export class ItemsModule {}
