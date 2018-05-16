import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";
import {UsuarioService} from "./usuario.service";

//permite registrar comoponetes, modulos y controladores
@Module({
    imports: [],//otros modulos
    providers:[UsuarioService],
    controllers: [//controladores
        AppController,
        UsuarioController,
        ParametrosController],
    components: [],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';
    configure(consumer: MiddlewaresConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1989) //enviar parametros al middleware
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }
}
