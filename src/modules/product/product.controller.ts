/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { Product } from './product.entity'
import { ProductService } from './product.service'

@Controller('products')

//call ProductService inside of ProductController
export class ProductController{
    constructor(private readonly productService: ProductService) {}
 @Get()
 async findAll(): Promise<Product[]> {
    return this.productService.findAll()
 }
}