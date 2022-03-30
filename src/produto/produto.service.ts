import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoInput: CreateProdutoInput) {
    const produto = await this.prisma.product.create({
      data: {
        ...createProdutoInput,
      },
    });

    if (!produto) {
      throw new InternalServerErrorException(
        'Não foi possível criar o usuário',
      );
    }
    return produto;
  }

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const produto = await this.prisma.product.findFirst({ where: { id } });
    if (!produto) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return produto;
  }

  async update(id: string, updateProdutoInput: UpdateProdutoInput) {
    const produto = await this.prisma.product.findFirst({ where: { id } });
    if (!produto) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const produtoUpdated = await this.prisma.product.update({
      where: { id },
      data: updateProdutoInput,
    });

    return produtoUpdated;
  }

  async remove(id: string) {
    const user = await this.prisma.product.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userDeleted = await this.prisma.product.delete({ where: { id } });
    return userDeleted ? true : false;
  }
}
