//export es para usarlo en el modulo
import {Body, Controller, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";

//como parametro se manda el url
@Controller('Parametros')
export class ParametrosController {
    //como parametro va la url
    @Post('devolver/:id')
    devolverParametros(@Req()request, @Res() response, @Query() queryParams, @Body() bodyParams, @Param() paramParams) {
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramParams: paramParams
        };
        //tres tipos de parametros que podemos enviar al servidor
        return response.send(respuesta)
    }

    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response,
        @Headers() header
    ) {
        const respuesta = {
            baseUrl:request.baseUrl,
            hostname:request.hostname,
            subdominios:request.subdomains,
            ip:request.ip,
            metodo:request.method,
            originalUrl:request.originalUrl,
            path:request.path,
            protocolo:request.protocol,
            header
        };
        console.log(respuesta);
        return response.send(respuesta);
    }

    @Get('ReqResRed')
    requestResponseRedirected(
        @Req() request,
        @Res() response,
        @Headers() header
    ) {
        const respuesta = {
            baseUrl:request.baseUrl,
            hostname:request.hostname,
            subdominios:request.subdomains,
            ip:request.ip,
            metodo:request.method,
            originalUrl:request.originalUrl,
            path:request.path,
            protocolo:request.protocol,
            header
        };
        console.log(respuesta);
        //con 200 no redirecciona
        //return response.redirect(200, 'http://localhost:1997');
        //mejor dejarle por defecto
        //return response.redirect('http://localhost:1997');
        //lo recomendable es usar url relativa ya que la ip localhost no puede variar pero si es una distinta puede variar con el tiempo y no podria escalar:
        return response.redirect('/Usuario/mostrar');

    }
}