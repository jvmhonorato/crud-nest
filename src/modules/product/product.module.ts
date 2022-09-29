/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    controllers: [ProductController],
    providers:[MySQLProvider,ProductService]
})

export class ProductModule{}