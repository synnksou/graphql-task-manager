import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutOwnerInput } from "../inputs/CommentCreateNestedManyWithoutOwnerInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { TaskCreateNestedManyWithoutOwnerIdInput } from "../inputs/TaskCreateNestedManyWithoutOwnerIdInput";

@TypeGraphQL.InputType("UserCreateWithoutAssigneesInput", {
  isAbstract: true
})
export class UserCreateWithoutAssigneesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password_digest!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  preferences!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_sign_in_at!: Date;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutOwnerIdInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutOwnerIdInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
