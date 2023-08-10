import { Post } from './post.interface';

export class PostRepository {
  posts: Post[] = [];

  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  getAll(): Post[] {
    return this.posts;
  }

  getPostById(id: string): Post {
    return this.posts.find((post) => post.id === id);
  }

  deletePostById(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  updatePostById(id: string): Post {
    const post = this.posts.find((post) => post.id == id);
    const index = this.posts.findIndex((post) => post.id === id);

    this.posts[index] = post;

    return post;
  }
}
