import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutOwnerInput } from "../inputs/CommentCreateWithoutOwnerInput";
import { CommentUpdateWithoutOwnerInput } from "../inputs/CommentUpdateWithoutOwnerInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: CommentCreateWithoutOwnerInput;
}
