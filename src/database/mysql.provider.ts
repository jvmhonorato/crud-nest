/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise'



@Injectable()
export class MySQLProvider {
    private readonly logger: Logger
    private readonly pool: Pool
    constructor(){
    this.logger = new Logger('MySQLProvider')
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      database:'cat-products',
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0
    })
    this.logger.log('Initialized!')
  }
  //test send to product.service.ts
  async getValue(): Promise<string> {
    const conn = await this.pool.getConnection()
    const [results] = await conn.query('select * from products')
    console.log(results)
  
    return 'Value from MySQL Provider'
  }
}