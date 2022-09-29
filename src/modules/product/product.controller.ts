/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')

//call ProductService inside of ProductController
export class ProductController{
    constructor(private readonly productService: ProductService) {}
 @Get()
 async findAll(): Promise<any> {
    return this.productService.findAll()
 }
}