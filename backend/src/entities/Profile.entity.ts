import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
  } from "typeorm";
  import PasserelleEntity from "./Passerelle.entity";

  @Entity({ name: "ads" })
export default class ProfileEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("uuid")
  user_id: string

  @Column()
  is_admin: Boolean

  @ManyToMany(() => PasserelleEntity)
  @JoinTable({
    name: "favorites", // Name of the join table
    joinColumn: { name: "profile_id", referencedColumnName: "id" }, // Join column for ProfileEntity
    inverseJoinColumn: { name: "passerelle_id", referencedColumnName: "id" }, // Join column for PasserelleEntity
  })
  favorites: PasserelleEntity[];


  @OneToMany(() => PasserelleEntity, (p) => p.contributor)
  contributions: [PasserelleEntity]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
