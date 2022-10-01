/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { MySQLProvider } from 'src/database/mysql.provider';
import { Product } from './product.entity';

//inject link and models with databank query

@Injectable()
export class ProductService{
    constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider){}
    async findAll(): Promise<Product[]> {
        const conn = await this.mysql.getConnection()
        const [results] = await conn.query('select * from products')
        const resultsPlain = JSON.parse(JSON.stringify(results))
        const products = resultsPlain.map(product => {
        const productEntity = new Product()
        productEntity.id = product.id
        productEntity.product = product.product
        productEntity.price = product.price
         return productEntity
       })
        return products
    }
    async findById(id: string): Promise<Product> {
        const conn = await this.mysql.getConnection()
        const [results] = await conn.query('select * from products where id = ?', [id])
        const resultsPlain = JSON.parse(JSON.stringify(results))
        const products = resultsPlain.map(product => {
        const productEntity = new Product()
         productEntity.id = product.id
         productEntity.product = product.product
         productEntity.price = product.price
         return productEntity
       })
        return products[0]
    }

    async create(entity: Product): Promise<Product> {
        const conn = await this.mysql.getConnection()
        await conn.query('insert into products (product, price) values (? , ?)', [entity.product, entity.price,])

        return entity
    }
}