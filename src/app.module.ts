import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule], // import other modules 
  controllers: [AppController],
  providers: [AppService],
  exports: [], // export a module globally for access 
})
export class AppModule {}
/**
 * 
 * 
 * Repository -> Data layer 
 * Service -> Business logic 
 * Controller -> Routing 
 */


// CRUD operation 
/// dammy database 