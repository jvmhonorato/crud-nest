/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { MySQLProvider } from 'src/database/mysql.provider';
import { Product } from './product.entity';

@Injectable()
export class ProductService{
    constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider){}
    async findAll(): Promise<Product[]> {
        const conn = await this.mysql.getConnection()
        const [results] = await conn.query('select * from products')
        const resultsPlain = JSON.parse(JSON.stringify(results))
       const products = resultsPlain.map(product => {
        const productEntity = new Product()
         productEntity.product = product.product
         productEntity.product = product.price
         return productEntity
       })
        return products
    }
}