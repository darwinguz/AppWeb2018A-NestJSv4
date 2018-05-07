import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";

//decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Guzman',
        edad: 28
    };

    usuarios = [];

    //este usuario va a usar estos recurso
    @HttpCode(200)
    @Get('mostrar')
    mostrarUsuario() {
        return this.usuario;
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request, @Res() response) {
        return response
            .status(200)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request, @Res() response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad

        };
        this.usuarios.push(nuevoUsuario);
        return response
            .status(201)
            .send(nuevoUsuario);
    }
}