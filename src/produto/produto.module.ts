import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoResolver } from './produto.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProdutoResolver, ProdutoService, PrismaService],
})
export class ProdutoModule {}
