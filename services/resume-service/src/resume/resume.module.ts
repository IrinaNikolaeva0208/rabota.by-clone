import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
