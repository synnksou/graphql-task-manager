import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateWithoutParentInput } from "../inputs/CommentsUpdateWithoutParentInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class CommentsUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutParentInput, {
    nullable: false
  })
  data!: CommentsUpdateWithoutParentInput;
}
