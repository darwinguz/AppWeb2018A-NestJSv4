import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./UsuarioController";

//permite registrar comoponetes, modulos y controladores
@Module({
    imports: [],//otros modulos
    controllers: [//controladores
        AppController,
        UsuarioController],
    components: [],
})
export class AppModule {
}
