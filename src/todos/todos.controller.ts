import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async getTodos(): Promise<any> {
    return await this.todoService.findAll();
  }
}
