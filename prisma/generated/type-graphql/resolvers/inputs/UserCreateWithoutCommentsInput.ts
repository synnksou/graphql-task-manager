import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateNestedManyWithoutUserInput } from "../inputs/AssigneesCreateNestedManyWithoutUserInput";
import { NotificationsCreateNestedManyWithoutUserInput } from "../inputs/NotificationsCreateNestedManyWithoutUserInput";
import { TasksCreateNestedManyWithoutOwnerIdInput } from "../inputs/TasksCreateNestedManyWithoutOwnerIdInput";

@TypeGraphQL.InputType("UserCreateWithoutCommentsInput", {
  isAbstract: true
})
export class UserCreateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => TasksCreateNestedManyWithoutOwnerIdInput, {
    nullable: true
  })
  Tasks?: TasksCreateNestedManyWithoutOwnerIdInput | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Notifications?: NotificationsCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AssigneesCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Assignees?: AssigneesCreateNestedManyWithoutUserInput | undefined;
}
