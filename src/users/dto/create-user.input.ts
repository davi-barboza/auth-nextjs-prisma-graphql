import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends User {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsString()
  avatar?: string;

  @Field()
  active?: boolean;

  @Field(() => String || Date)
  created_at?: string | Date;

  @Field(() => String || Date)
  updated_at?: string | Date;

  @Field()
  @IsString()
  user_creation?: string;

  @Field()
  @IsString()
  user_last_update?: string;
}
