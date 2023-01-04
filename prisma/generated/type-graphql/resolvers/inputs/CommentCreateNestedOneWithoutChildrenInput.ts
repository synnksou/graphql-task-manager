import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutChildrenInput } from "../inputs/CommentCreateOrConnectWithoutChildrenInput";
import { CommentCreateWithoutChildrenInput } from "../inputs/CommentCreateWithoutChildrenInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedOneWithoutChildrenInput", {
  isAbstract: true
})
export class CommentCreateNestedOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CommentCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
