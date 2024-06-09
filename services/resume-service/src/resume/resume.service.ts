import { Injectable } from '@nestjs/common';
import { ResumeDto } from './types';

@Injectable()
export class ResumeService {
  getPage() {}

  getById(id: string) {}

  create(resumeDto: ResumeDto) {}

  update(id: string, resumeDto: ResumeDto) {}

  delete(id: string) {}
}
