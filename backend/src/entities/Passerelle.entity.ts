import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    ManyToOne,
    ManyToMany,
    JoinTable,
  } from "typeorm";
  import { Length } from "class-validator";
  import GeoEntity from "./Geo.entity";
  import ProfileEntity from "./Profile.entity";


  @Entity({ name: "ads" })
export default class PasserelleEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Length(5)
  @Column()
  title: string;

  @Column({nullable: true})
  description?: string;

  @Column()
  image: string;

  @OneToOne(() => GeoEntity, {
    cascade: true,
    onDelete: "CASCADE",
    nullable: false
  })
  geo: GeoEntity;
  
  @OneToOne(() => ProfileEntity)
  contributor: ProfileEntity

  @ManyToMany(() => ProfileEntity, (p)=> p.favorites)
  favorites : ProfileEntity[];

  @Column()
  validated: Boolean
  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
