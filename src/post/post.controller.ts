import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostInterface } from './post.interface';
import { PostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() post: PostDto): PostInterface {
    return this.postService.createPost(post);
  }

  @Get()
  getAllPosts(): PostInterface[] {
    return this.postService.getAllPosts();
  }

  @Delete()
  deletePost(@Param('id') id: string): void {}

  @Put()
  updatePost(@Param('id') id: string): void {}

  // get a post by id
  // implement all the methods
}
