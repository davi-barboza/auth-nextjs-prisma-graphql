import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './produto.service';

@Resolver(() => Produto)
export class ProdutoResolver {
  constructor(private readonly produtoService: ProdutoService) {}

  @Mutation(() => Produto)
  createProduto(
    @Args('createProdutoInput') createProdutoInput: CreateProdutoInput,
  ) {
    return this.produtoService.create(createProdutoInput);
  }

  @Query(() => [Produto], { name: 'produtos' })
  findAll() {
    return this.produtoService.findAll();
  }

  @Query(() => Produto, { name: 'produto' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.produtoService.findOne(id);
  }

  @Mutation(() => Produto)
  updateProduto(
    @Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput,
  ) {
    return this.produtoService.update(
      updateProdutoInput.id,
      updateProdutoInput,
    );
  }

  @Mutation(() => Boolean)
  async removeProduto(@Args('id', { type: () => String }) id: string) {
    return await this.produtoService.remove(id);
  }
}
