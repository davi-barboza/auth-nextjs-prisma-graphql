import { ObjectType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
export class Produto implements Prisma.ProductUncheckedCreateInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  bar_code: string;

  @Field(() => Number || String)
  price: string | number | Prisma.Decimal;

  @Field(() => Date || String)
  created_at?: string | Date;
}
