/* eslint-disable prettier/prettier */
import {Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {

     constructor(private UsuarioRepository: UsuarioRepository) {};

     @Post()
     async criaUsuario(@Body() dadosDoUsuario) {
     this.UsuarioRepository.salvar(dadosDoUsuario);
     }

     @Get()
     async listUsuarios() {
          return this.UsuarioRepository.listar();
     }

}