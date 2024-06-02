import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  getUserResumePage() {
    return this.resumeService.getPage();
  }

  @Get(':id')
  getResumeById() {
    return this.resumeService.getById();
  }

  @Post()
  createNewResume() {
    return this.resumeService.create();
  }

  @Put(':id')
  updateResume() {
    return this.resumeService.update();
  }

  @Delete(':id')
  deleteResume() {
    return this.resumeService.delete();
  }
}
