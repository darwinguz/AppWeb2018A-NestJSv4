import {Injectable} from "@nestjs/common/interfaces";

@Injectable()
export class UsuarioService {
    usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }

    mostrarUsuarios(): Usuario[] {
        return this.usuarios;
    }
}

interface Usuario {
    nombre: string,
    apellido: string,
    edad: number
}