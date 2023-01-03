import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyMutationInput } from "../inputs/CommentsUpdateManyMutationInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentsScalarWhereInput, {
    nullable: false
  })
  where!: CommentsScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentsUpdateManyMutationInput;
}
