/* eslint-disable prettier/prettier */
import {Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

     constructor(private UsuarioRepository: UsuarioRepository) {};

     @Post()
     async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
          this.UsuarioRepository.salvar(dadosDoUsuario);
          return dadosDoUsuario;
     }

     @Get()
     async listUsuarios() {
          return this.UsuarioRepository.listar();
     }

}