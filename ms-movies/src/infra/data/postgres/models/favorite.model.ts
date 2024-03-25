import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovieModel } from "./movie.model";

@Entity("favorites")
export class FavoriteModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  user_id: string;
  @Column("boolean")
  is_active: boolean;

  @ManyToOne(() => MovieModel)
  @JoinColumn({ name: "movie_id" })
  movie: MovieModel;
}
