import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutParentInput } from "../inputs/CommentCreateWithoutParentInput";
import { CommentUpdateWithoutParentInput } from "../inputs/CommentUpdateWithoutParentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutParentInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutParentInput, {
    nullable: false
  })
  create!: CommentCreateWithoutParentInput;
}
