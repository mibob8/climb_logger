import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { CreateClimbDto } from './dtos/CreateClimbDto';
import { Climb } from './climb.entity';

@Injectable()
export class ClimbService {
  constructor(@InjectRepository(Climb) private repo: Repository<Climb>) {}

  add(climbDto: CreateClimbDto) {
    const newClimb = this.repo.create(climbDto);
    this.repo.save(newClimb);
  } 
}