import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Resume } from './types';

@Module({
  imports: [ConfigModule.forRoot(), SequelizeModule.forFeature([Resume])],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
