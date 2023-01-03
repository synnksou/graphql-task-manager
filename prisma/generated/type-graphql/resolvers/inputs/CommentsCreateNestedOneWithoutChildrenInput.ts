import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutChildrenInput } from "../inputs/CommentsCreateOrConnectWithoutChildrenInput";
import { CommentsCreateWithoutChildrenInput } from "../inputs/CommentsCreateWithoutChildrenInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedOneWithoutChildrenInput", {
  isAbstract: true
})
export class CommentsCreateNestedOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput | undefined;
}
