import { Body, Controller, Get, Post } from '@nestjs/common'; 
import { CreateClimbDto } from './dtos/CreateClimbDto';
import { ClimbService } from './climb.service';

@Controller('climbs')
export class ClimbController {
  constructor(private climbService: ClimbService){}

  @Get()
  getClimb(): number {
    return 0;
  }

  @Post()
  addClimb(@Body() body: CreateClimbDto) {
    this.climbService.add(body);
    console.log(body);
    return body;
  }
}