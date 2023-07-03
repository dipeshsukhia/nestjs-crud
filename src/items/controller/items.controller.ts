import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  UsePipes,
  HttpException,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';
import { ItemsService } from '../service/items.service';
import { Item } from 'src/typeorm/entities/Item';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<Item> {
    return this.itemsService.findOne(id).then((item: Item) => {
      if (!item) {
        throw new HttpException('Item not available!!!', HttpStatus.NOT_FOUND);
      }
      return item;
    });
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Body() updateItemDto: UpdateItemDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<Item> {
    return this.itemsService.findOne(id).then((item: Item) => {
      if (!item) {
        throw new HttpException('Item not available!!!', HttpStatus.NOT_FOUND);
      }
      return this.itemsService.update(id, updateItemDto).then((result) => {
        if (!result) {
          throw new HttpException('Item not Updated!!!', HttpStatus.NOT_FOUND);
        }
        return this.itemsService.findOne(id);
      });
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<Item> {
    return this.itemsService.findOne(id).then((item: Item) => {
      if (!item) {
        throw new HttpException('Item not available!!!', HttpStatus.NOT_FOUND);
      }
      return this.itemsService.delete(id).then((result) => {
        if (!result) {
          throw new HttpException('Item not Deleted!!!', HttpStatus.NOT_FOUND);
        }
        return item;
      });
    });
  }
}
