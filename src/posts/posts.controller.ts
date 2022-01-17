import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostModel } from './posts.interface';
import { Get, Param, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public findAll(): Array<PostModel> {
    return this.postsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number): PostModel {
    //param is string type. id is number. use ParseIntPipe to convert id to number.
    return this.postsService.findOne(id);
  }

  @Post()
  public create(@Body() post: PostModel): PostModel {
    return this.postsService.create(post);
  }

  @Put(':id')
  public update(@Param('id', ParseIntPipe) id: number, @Body() post: PostModel,): PostModel {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): void {
    this.postsService.delete(id);
  }
}
