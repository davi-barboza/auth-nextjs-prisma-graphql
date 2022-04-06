import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.create({
      data: {
        ...createUserInput,
        password: await bcrypt.hash(createUserInput.password, 10),
      },
    });

    if (!user) {
      throw new InternalServerErrorException('Não foi possível criar o usuário');
    }
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userUpdated = await this.prisma.user.update({
      where: { id },
      data: updateUserInput,
    });

    return userUpdated;
  }

  async remove(id: number) {
    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userDeleted = await this.prisma.user.delete({ where: { id } });
    return userDeleted ? true : false;
  }
}
