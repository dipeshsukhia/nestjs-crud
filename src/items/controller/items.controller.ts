import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common'
import { CreateItemDto } from '../dto/create-item.dto'
import { UpdateItemDto } from '../dto/update-item.dto'
import { ItemsService } from '../service/items.service'
import { Item } from '../interface/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll()
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Item {
        return this.itemsService.create( createItemDto )
    }

    @Get(":id")
    findOne(@Param('id') id) : Item {
        return this.itemsService.findOne( Number(id) )
    }

    @Put(":id")
    update(@Body() updateItemDto: UpdateItemDto, @Param('id') id) : Item{
        return this.itemsService.update( Number(id), updateItemDto )
    }

    @Delete(":id")
    delete(@Param('id') id) : Item {
        return this.itemsService.delete( Number(id) )
    }

}
