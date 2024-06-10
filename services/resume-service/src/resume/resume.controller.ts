import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeDto } from './types';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  getUserResumePage() {
    return this.resumeService.getPage();
  }

  @Get(':id')
  getResumeById(@Param('id', ParseUUIDPipe) id: string) {
    return this.resumeService.getById(id);
  }

  @Post()
  createNewResume(@Body() resumeDto: ResumeDto) {
    return this.resumeService.create(resumeDto);
  }

  @Put(':id')
  updateResume(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() resumeDto: ResumeDto,
  ) {
    return this.resumeService.update(id, resumeDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteResume(@Param('id', ParseUUIDPipe) id: string) {
    return this.resumeService.delete(id);
  }
}
