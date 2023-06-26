import { Injectable } from '@nestjs/common'
import { Item } from '../interface/item.interface'
import { CreateItemDto } from '../dto/create-item.dto';

@Injectable()
export class ItemsService {
    private items: Item[] = [
        {
            id: 1,
            name: "Item One",
            description: "Item one description",
            qty: 10
        },
        {
            id: 2,
            name: "Item Two",
            description: "Item Two description",
            qty: 20
        }
    ]

    async findAll(): Promise<Item[]> {
        return this.items;
    }

    findOne(id: number): Item {
        return this.items.find( item => item.id === id );
    }

    async create( item: Item): Promise<Item> {
        item.id = this.items.reduce((max, item) => item.id > max ? item.id : max, 0) + 1
        this.items.push( item )
        return item
    }    

    async update( id: number, item: Item): Promise<Item> {
        this.delete(id)
        item.id = id
        this.items.push( item )
        return item
    }

    delete(id: number): Item {
        let item = this.items.find( item => item.id === id )
        this.items = this.items.filter(item => item.id !== id);
        return item
    }

}
