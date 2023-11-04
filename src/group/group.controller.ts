import { Controller, Get, Query, Req } from '@nestjs/common';
import { GroupService } from './group.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthEntity } from 'src/auth/entities/auth.entity';

@ApiTags('Groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  findAll(@Auth() auth: AuthEntity) {
    return this.groupService.findAll(auth);
  }

}
