import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsUpdateWithoutUserInput } from "../inputs/CommentsUpdateWithoutUserInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CommentsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CommentsUpdateWithoutUserInput;
}
