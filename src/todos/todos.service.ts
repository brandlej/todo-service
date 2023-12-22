import { EntityRepository } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { Todo } from "src/entities/todo.entity";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: EntityRepository<Todo>
  ) {}

  async create(todo: Todo) {
    await this.todoRepository.create(todo);
  }

  async findAll() {
    return await this.todoRepository.findAll();
  }
}
