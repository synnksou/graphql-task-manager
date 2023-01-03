import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateNestedManyWithoutParentInput } from "../inputs/CommentsCreateNestedManyWithoutParentInput";
import { TasksCreateNestedOneWithoutCommentsInput } from "../inputs/TasksCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("CommentsCreateWithoutParentInput", {
  isAbstract: true
})
export class CommentsCreateWithoutParentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TasksCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  Tasks!: TasksCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  children?: CommentsCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
