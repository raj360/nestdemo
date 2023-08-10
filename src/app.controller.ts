import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
//localhost:3000/app
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() data: { test: string }, @Param() query: any): string {
    // return `Teseting app with data : ${JSON.stringify(
    //   data,
    // )} and qeury: ${query}`;
    return this.appService.getHello(data);
  }
}
