import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutChildrenInput } from "../inputs/CommentsCreateWithoutChildrenInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutChildrenInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutChildrenInput;
}
