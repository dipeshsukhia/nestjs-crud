import { TypeOrmModule } from '@nestjs/typeorm';
//import { Item } from './entities/Item';

const Orm = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'db4free.net',
  port: 3306,
  username: 'hello_world',
  password: 'hello_world',
  database: 'hello_world',
  //entities: [Item],
  autoLoadEntities: true,
  synchronize: true,
});

export default Orm;
