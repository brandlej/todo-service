import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from "./base.entity";

@Entity()
export class Todo extends BaseEntity {
  @Property()
  title: string;

  @Property()
  body: string;

  @Property({ nullable: true })
  completed?: Date;
}
