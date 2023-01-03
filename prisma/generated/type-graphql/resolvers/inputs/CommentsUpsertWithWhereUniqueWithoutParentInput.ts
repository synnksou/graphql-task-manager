import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutParentInput } from "../inputs/CommentsCreateWithoutParentInput";
import { CommentsUpdateWithoutParentInput } from "../inputs/CommentsUpdateWithoutParentInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class CommentsUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutParentInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutParentInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutParentInput;
}
