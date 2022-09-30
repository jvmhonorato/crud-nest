import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [DatabaseModule.forRoot() ,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
