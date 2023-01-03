import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutChildrenInput } from "../inputs/CommentsCreateWithoutChildrenInput";
import { CommentsUpdateWithoutChildrenInput } from "../inputs/CommentsUpdateWithoutChildrenInput";

@TypeGraphQL.InputType("CommentsUpsertWithoutChildrenInput", {
  isAbstract: true
})
export class CommentsUpsertWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentsUpdateWithoutChildrenInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutChildrenInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutChildrenInput;
}
