import { Global, Module } from '@nestjs/common';
import { typeOrmDBProviders } from 'src/config/database.providers';

@Global()
@Module({
  providers: [...typeOrmDBProviders],
  exports: [...typeOrmDBProviders],
})
export class DatabaseModule {}
