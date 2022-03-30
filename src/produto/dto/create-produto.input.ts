import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
import { Produto } from '../entities/produto.entity';

@InputType()
export class CreateProdutoInput extends Produto {
  @Field()
  @IsString({ message: 'O nome deve ser string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @Field()
  @IsString({ message: 'O código de barras deve ser string' })
  @IsNotEmpty({ message: 'código de barras não pode ser vazio' })
  bar_code: string;

  @Field(() => Number || String)
  @IsNotEmpty({ message: 'O preço não pode ser vazio' })
  price: string | number | Prisma.Decimal;
}
