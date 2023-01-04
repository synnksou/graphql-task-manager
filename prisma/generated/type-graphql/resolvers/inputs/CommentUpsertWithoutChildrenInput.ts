import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutChildrenInput } from "../inputs/CommentCreateWithoutChildrenInput";
import { CommentUpdateWithoutChildrenInput } from "../inputs/CommentUpdateWithoutChildrenInput";

@TypeGraphQL.InputType("CommentUpsertWithoutChildrenInput", {
  isAbstract: true
})
export class CommentUpsertWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutChildrenInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutChildrenInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CommentCreateWithoutChildrenInput;
}
