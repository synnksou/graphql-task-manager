import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutUserInput } from "../inputs/CommentsCreateWithoutUserInput";
import { CommentsUpdateWithoutUserInput } from "../inputs/CommentsUpdateWithoutUserInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CommentsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutUserInput;
}
