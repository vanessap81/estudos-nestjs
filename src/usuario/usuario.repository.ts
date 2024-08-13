/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

/* eslint-disable prettier/prettier */
@Injectable()
export class UsuarioRepository {

    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
   }
}