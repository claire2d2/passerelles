import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn
} from "typeorm";
import { Length } from "class-validator";
import ProfileEntity from "./Profile.entity";

@Entity({ name: "passerelles" })
export default class PasserelleEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Length(5)
	@Column()
	title: string;

	@Column({ nullable: true })
	description?: string;

	@Column()
	image: string;

	@Column()
    lat: string;

    @Column()
    lng: string;

	@OneToOne(() => ProfileEntity)
	@JoinColumn({
		name: "contributor_id", // Foreign key column in `passerelles` table
	})
	contributor: ProfileEntity;

	@Column({ default: true })
	validated: Boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
