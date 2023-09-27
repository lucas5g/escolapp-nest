import { Controller, Get, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { FindGroupDto } from './dto/find-group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  // @Post()
  // create(@Body() createGroupDto: CreateGroupDto) {
  //   return this.groupService.create(createGroupDto);
  // }

  @Get()
  findAll(@Query() findGroupDto: FindGroupDto) {
    return this.groupService.findAll(findGroupDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.groupService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
  //   return this.groupService.update(+id, updateGroupDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.groupService.remove(+id);
  // }
}
