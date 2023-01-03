import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUserInputEnvelope } from "../inputs/CommentsCreateManyUserInputEnvelope";
import { CommentsCreateOrConnectWithoutUserInput } from "../inputs/CommentsCreateOrConnectWithoutUserInput";
import { CommentsCreateWithoutUserInput } from "../inputs/CommentsCreateWithoutUserInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class CommentsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;
}
