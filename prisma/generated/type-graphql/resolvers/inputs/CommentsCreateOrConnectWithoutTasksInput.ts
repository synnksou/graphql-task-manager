import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateWithoutTasksInput } from "../inputs/CommentsCreateWithoutTasksInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateOrConnectWithoutTasksInput", {
  isAbstract: true
})
export class CommentsCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: CommentsCreateWithoutTasksInput;
}
