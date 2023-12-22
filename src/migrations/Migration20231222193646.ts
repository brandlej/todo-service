import { Migration } from '@mikro-orm/migrations';

export class Migration20231222193646 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "todo" alter column "completed" type timestamptz(0) using ("completed"::timestamptz(0));');
    this.addSql('alter table "todo" alter column "completed" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "todo" alter column "completed" type timestamptz using ("completed"::timestamptz);');
    this.addSql('alter table "todo" alter column "completed" set not null;');
  }

}
