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

  @Entity({ name: "profiles" })
export default class ProfileEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("uuid")
  user_id: string

  @Column()
  is_admin: Boolean

  @ManyToMany(() => PasserelleEntity, {
    onDelete: "CASCADE"
  })
  @JoinTable({
  name: "favorites", // Join table name
  joinColumn: {
    name: "profile_id", // Foreign key column in the join table for ProfileEntity
    referencedColumnName: "id", // ProfileEntity's primary key
  },
  inverseJoinColumn: {
    name: "passerelle_id", // Foreign key column in the join table for PasserelleEntity
    referencedColumnName: "id", // PasserelleEntity's primary key
  },
})
favorites: PasserelleEntity[];



  @OneToMany(() => PasserelleEntity, (p) => p.contributor)
  contributions: [PasserelleEntity]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
