import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("favorites")
export class FavoriteModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  user_id: string;
  @Column("boolean")
  is_active: boolean;
  @Column("int")
  movie_id: number;
}
