import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProdutoInput } from './create-produto.input';

@InputType()
export class UpdateProdutoInput extends PartialType(CreateProdutoInput) {}
