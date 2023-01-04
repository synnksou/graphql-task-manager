import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutChildrenInput } from "../inputs/CommentCreateWithoutChildrenInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutChildrenInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CommentCreateWithoutChildrenInput;
}
