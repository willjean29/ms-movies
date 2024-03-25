import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("movies")
export class MovieModel {
  @PrimaryColumn("int")
  id: number;
  @Column("bool")
  adult: boolean;
  @Column()
  backdrop_path: string | null;
  @Column({
    array: true,
    type: "int",
  })
  genre_ids: number[];
  @Column()
  original_language: string;
  @Column()
  original_title: string;
  @Column()
  overview: string;
  @Column("decimal")
  popularity: number;
  @Column()
  poster_path: string | null;
  @Column()
  release_date: string;
  @Column()
  title: string;
  @Column("bool")
  video: boolean;
  @Column("decimal")
  vote_average: number;
  @Column("int")
  vote_count: number;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
