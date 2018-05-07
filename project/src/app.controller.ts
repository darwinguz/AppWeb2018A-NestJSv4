import {Get, Controller, Req, Res} from '@nestjs/common';

//cuando no se tiene typescript y necesitamos una libreria de nodejs
const fs = require("fs");

//decoradores que dan funcionalidad extra
@Controller()//decorators
export class AppController {
    @Get()
    root(@Req() request, @Res() response): string {
        console.log('1 Inicio');
        let contenidoHtml = '';
        console.log('2 contenidoHtml', contenidoHtml);
        fs.readFile(
            __dirname + '/html/Index.html',
            'utf8',
            (error, contenidoDelArchivo) => {
                console.log('3 Respondio');
                const nombre = 'Darwin';
                if (error) {
                    console.log('4 Error', error);
                    console.log('5 contenidoHtml', contenidoHtml);
                    console.log('6 Termino');
                    return response.send('Error');
                } else {
                    contenidoHtml = contenidoDelArchivo;
                    contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
                    console.log('4 contenidoHtml', contenidoHtml);
                    console.log('5 contenidoHtml', contenidoHtml);
                    console.log('6 Termino');
                    return response.send(contenidoHtml);
                }
            }
        );
        return contenidoHtml;
    }
}
