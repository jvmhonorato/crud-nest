/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { MySQLProvider } from 'src/database/mysql.provider';

@Injectable()
export class ProductService{
    constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider){}
    async findAll(): Promise<any> {
        //test come from  mysql.provider.ts
        console.log(this.mysql.getValue())
        return [{id:1},{id:2}]
    }
}