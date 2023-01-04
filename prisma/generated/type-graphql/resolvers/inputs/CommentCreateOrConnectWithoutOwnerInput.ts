import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutOwnerInput } from "../inputs/CommentCreateWithoutOwnerInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: CommentCreateWithoutOwnerInput;
}
