import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/CreateUserDto';
 

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Get()
  getUsers(): number {
    return 0;
  }

  @Post()
  addUser(@Body() body: CreateUserDto) {
    this.authService.add(body);
    console.log(body);
    return body;
  }
}
