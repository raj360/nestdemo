import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data: { test: string }): string {
    const toUpperCase = data.test.toUpperCase();
    return toUpperCase;
  }
}
