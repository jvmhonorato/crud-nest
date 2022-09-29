/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';



@Injectable()
export class MySQLProvider {
    private readonly logger: Logger
    constructor(){
    this.logger = new Logger('MySQLProvider')
    this.logger.log('Initialized!')
  }
  //test send to product.service.ts
  getValue(): string {
    return 'Value from MySQL Provider'
  }
}