import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
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
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  avatar?: string;

  @Field({ nullable: true })
  active?: boolean;

  @Field(() => String || Date, { nullable: true })
  @IsOptional()
  created_at?: string | Date;

  @Field(() => String || Date, { nullable: true })
  @IsOptional()
  updated_at?: string | Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  user_create: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  user_last_update?: number;
}
