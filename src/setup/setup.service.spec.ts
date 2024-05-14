import { Test, TestingModule } from '@nestjs/testing';
import { CreateSetupDto } from '@/setup/dto/create-setup.dto';
import { SetupService } from '@/setup/setup.service';
import { PrismaService } from '@/prisma/prisma.service';
import { AuthEntity } from '@/auth/entities/auth.entity';
import { auth } from '@/utils/test';

describe('SetupService', () => {
  let service: SetupService;
  const properties = ['id', 'documentLink', 'unityId'];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetupService, PrismaService],
    }).compile();

    service = module.get<SetupService>(SetupService);
  });

  it('create', async () => {
    const data: CreateSetupDto = {
      documentLink:
        'https://docs.google.com/document/d/1MJgL-HzxPFv6A0aRK8CMoKCiCdf46TITdz9iPf-z9kw/edit?usp=drive_link',
      unityId: 2,
    };

    const res = await service.create(data);

    expect(res).toMatchObject(data);

    await service.remove(res.id);
  });

  it('find all', async () => {
    const res = await service.findAll(auth);

    for (const row of res) {
      expect(Object.keys(row)).toEqual(properties);
    }
  });
});
