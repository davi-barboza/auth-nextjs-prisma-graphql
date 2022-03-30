import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';

describe('ProdutoResolver', () => {
  let resolver: ProdutoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoResolver, ProdutoService],
    }).compile();

    resolver = module.get<ProdutoResolver>(ProdutoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
