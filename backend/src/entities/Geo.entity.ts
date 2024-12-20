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
  import PasserelleEntity from "./Passerelle.entity";

  @Entity({ name: "geos" })
  export default class GeoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @OneToOne(() => PasserelleEntity, (p) => p.geo)
  passerelle: PasserelleEntity
  
  @Column()
  lat: string

  @Column()
  lng: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
