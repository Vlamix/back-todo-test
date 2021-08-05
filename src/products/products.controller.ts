import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  //@Redirect('https://google.com', 301)
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id
  }

  @Put(':id')
  put(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'update' + id
  }
}