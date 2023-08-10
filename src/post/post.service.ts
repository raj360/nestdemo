import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  createPost(post: Post): Post {
    return this.postRepository.create(post);
  }

  getAllPosts(): Post[] {
    return this.postRepository.getAll();
  }
}
