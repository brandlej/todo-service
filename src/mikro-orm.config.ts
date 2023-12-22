import { PostgreSqlDriver } from "@mikro-orm/postgresql";

/**
 * https://mikro-orm.io/docs/configuration
 */
export default {
  entities: ["./dist/src/entities"],
  entitiesTs: ["./src/entities"],
  clientUrl: process.env.DATABASE_URL,
  driver: PostgreSqlDriver,
  debug: true,
  migrations: {
    path: "./src/migrations",
    disableForeignKeys: false,
  },
  schemaGenerator: {
    disableForeignKeys: false,
    createForeignKeyConstraints: false,
  },
};
