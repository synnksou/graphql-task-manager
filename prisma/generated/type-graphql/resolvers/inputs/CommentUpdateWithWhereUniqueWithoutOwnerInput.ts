import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutOwnerInput } from "../inputs/CommentUpdateWithoutOwnerInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutOwnerInput;
}
