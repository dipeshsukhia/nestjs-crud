import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import Orm from './typeorm/orm';

@Module({
  imports: [Orm, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
