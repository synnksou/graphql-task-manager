import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutParentInput } from "../inputs/CommentCreateNestedManyWithoutParentInput";
import { CommentCreateNestedOneWithoutChildrenInput } from "../inputs/CommentCreateNestedOneWithoutChildrenInput";
import { TaskCreateNestedOneWithoutCommentsInput } from "../inputs/TaskCreateNestedOneWithoutCommentsInput";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("CommentCreateWithoutOwnerInput", {
  isAbstract: true
})
export class CommentCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  children?: CommentCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutChildrenInput, {
    nullable: true
  })
  parent?: CommentCreateNestedOneWithoutChildrenInput | undefined;

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
