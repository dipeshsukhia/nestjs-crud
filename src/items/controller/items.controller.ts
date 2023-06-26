import { Body, Controller, Get, Post, Put, Delete, Param, ParseIntPipe} from '@nestjs/common'
import { CreateItemDto } from '../dto/create-item.dto'
import { UpdateItemDto } from '../dto/update-item.dto'
import { ItemsService } from '../service/items.service'
import { Item } from '../interface/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll()
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create( createItemDto )
    }

    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id) : Promise<Item> {
        return this.itemsService.findOne( id )
    }

    @Put(":id")
    update(@Body() updateItemDto: UpdateItemDto, @Param('id', ParseIntPipe) id) : Promise<Item> {
        return this.itemsService.update( id, updateItemDto )
    }

    @Delete(":id")
    delete(@Param('id', ParseIntPipe) id) : Promise<Item> {
        return this.itemsService.delete( id )
    }

}
