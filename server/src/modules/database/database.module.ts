import { Module } from '@nestjs/common';
import { typeOrmDBProviders } from 'src/config/database.providers';

@Module({
  providers: [...typeOrmDBProviders],
  exports: [...typeOrmDBProviders],
})
export class DatabaseModule {}
