import { Injectable, NotFoundException } from '@nestjs/common';
import { Resume, ResumeDto } from './types';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume) private resumeModel: typeof Resume) {}

  getPage() {}

  async getById(id: string) {
    const requiredResume = await this.resumeModel.findOne({ where: { id } });

    if (!requiredResume) {
      throw new NotFoundException('Resume not found');
    }

    return requiredResume;
  }

  async create(resumeDto: ResumeDto) {
    return await this.resumeModel.create({ ...resumeDto });
  }

  async update(id: string, resumeDto: ResumeDto) {
    const requiredResume = await this.getById(id);
    Object.assign(requiredResume, resumeDto);
    return requiredResume.save();
  }

  async delete(id: string) {
    await this.getById(id);
    await this.resumeModel.destroy({ where: { id } });
  }
}
