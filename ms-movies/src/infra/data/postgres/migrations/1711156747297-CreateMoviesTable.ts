import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMoviesTable1711156747297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "movies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "adult",
            type: "boolean",
          },
          {
            name: "backdrop_path",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "genre_ids",
            type: "int",
            isArray: true,
          },
          {
            name: "original_language",
            type: "varchar",
          },
          {
            name: "original_title",
            type: "varchar",
          },
          {
            name: "overview",
            type: "varchar",
          },
          {
            name: "popularity",
            type: "decimal",
            precision: 10,
            scale: 3,
          },
          {
            name: "poster_path",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "release_date",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "video",
            type: "boolean",
          },
          {
            name: "vote_average",
            type: "decimal",
            precision: 10,
            scale: 3,
          },
          {
            name: "vote_count",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("movies");
  }
}
