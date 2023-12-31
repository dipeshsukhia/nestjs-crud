import { Module } from '@nestjs/common';
import { ItemsController } from './controller/items.controller';
import { ItemsService } from './service/items.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
