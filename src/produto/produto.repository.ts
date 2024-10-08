/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {

    private produtos = [];

    async salvarProduto(produto) {
        this.produtos.push(produto);
    }

    async listarProduto() {
        return this.produtos;
    }
}