import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { Climb } from './climb.entity';
import { ClimbService } from './climb.service';
import { ClimbController } from './climb.controller';

@Module({ 
  imports: [TypeOrmModule.forFeature([Climb])],
  controllers: [ClimbController],
  providers: [ClimbService],
})
export class ClimbModule {}