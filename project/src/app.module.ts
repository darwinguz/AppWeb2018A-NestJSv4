import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//permite registrar comoponetes, modulos y controladores
@Module({
  imports: [],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
