import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutTasksInput } from "../inputs/CommentsCreateWithoutTasksInput";
import { CommentsUpdateWithoutTasksInput } from "../inputs/CommentsUpdateWithoutTasksInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpsertWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class CommentsUpsertWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: CommentsUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutTasksInput;
}
