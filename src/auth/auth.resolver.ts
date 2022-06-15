import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthType)
  async login(@Args('authInput') authInput: AuthInput, @Context() context): Promise<AuthType> {
    return await this.authService.login(context.user);
  }
}
