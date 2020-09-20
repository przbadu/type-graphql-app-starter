import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

/**
 * @ObjectType() allow us to whitelist which @Field() we
 * want to expose to API response.
 * In this example, we are exposing all fields except password.
 */
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  name: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;
}
