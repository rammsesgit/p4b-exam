import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Post()
  createPost(@Body() newPost: CreatePostDto): Promise<PostEntity> {
    return this.postService.createPost(newPost);
  }

  @Get()
  getPosts(): Promise<PostEntity[]> {
    return this.postService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postService.getPost(id);
  }
}
