import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoModule } from '../modules/todo/todo.module'
import { ProductsController } from '../products/products.controller'
import { ProductsService } from '../products/products.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot()],
  controllers: [AppController, ProductsController, ProductsService],
  providers: [AppService],
})
export class AppModule {}
