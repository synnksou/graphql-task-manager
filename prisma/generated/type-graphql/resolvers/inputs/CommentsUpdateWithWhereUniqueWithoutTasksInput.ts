import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateWithoutTasksInput } from "../inputs/CommentsUpdateWithoutTasksInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class CommentsUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutTasksInput, {
    nullable: false
  })
  data!: CommentsUpdateWithoutTasksInput;
}
