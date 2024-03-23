import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddMovieIdToFavorites1711230119122 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "favorites",
      new TableColumn({
        name: "movie_id",
        type: "int",
      })
    );

    await queryRunner.createForeignKey(
      "favorites",
      new TableForeignKey({
        name: "FavoritesMovie",
        columnNames: ["movie_id"],
        referencedTableName: "movies",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("favorites", "FavoritesMovie");
    await queryRunner.dropColumn("favorites", "movie_id");
  }
}
