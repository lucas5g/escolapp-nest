import { AuthEntity } from '@/auth/entities/auth.entity';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateSetupDto } from '@/setup/dto/create-setup.dto';
import { UpdateSetupDto } from '@/setup/dto/update-setup.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SetupService {
  constructor(private prisma: PrismaService) {}
  create(createSetupDto: CreateSetupDto) {
    return this.prisma.setup.create({
      data: createSetupDto,
    });
  }

  findAll(auth: AuthEntity) {
    return this.prisma.setup.findMany({
      where: {
        unityId: auth.unityId,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} setup`;
  }

  update(id: number, updateSetupDto: UpdateSetupDto) {
    return `This action updates a #${id} setup`;
  }

  remove(id: number) {
    return this.prisma.setup.delete({
      where: { id },
    });
  }
}
