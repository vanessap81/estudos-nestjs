/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {

  constructor(private ProdutoRepository: ProdutoRepository) {};
  
  @Post()
  async criarProduto(@Body() dadosProduto) {
    this.ProdutoRepository.salvarProduto(dadosProduto);
  }

  @Get()
  async listarProduto() {
    return this.ProdutoRepository.listarProduto();
  }

}