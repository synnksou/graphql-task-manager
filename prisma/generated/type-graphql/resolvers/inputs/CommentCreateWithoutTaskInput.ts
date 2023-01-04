import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutParentInput } from "../inputs/CommentCreateNestedManyWithoutParentInput";
import { CommentCreateNestedOneWithoutChildrenInput } from "../inputs/CommentCreateNestedOneWithoutChildrenInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("CommentCreateWithoutTaskInput", {
  isAbstract: true
})
export class CommentCreateWithoutTaskInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  owner?: UserCreateNestedOneWithoutCommentsInput | undefined;

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
