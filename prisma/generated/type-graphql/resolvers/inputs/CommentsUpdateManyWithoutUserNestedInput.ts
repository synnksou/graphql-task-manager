import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUserInputEnvelope } from "../inputs/CommentsCreateManyUserInputEnvelope";
import { CommentsCreateOrConnectWithoutUserInput } from "../inputs/CommentsCreateOrConnectWithoutUserInput";
import { CommentsCreateWithoutUserInput } from "../inputs/CommentsCreateWithoutUserInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentsUpdateManyWithWhereWithoutUserInput";
import { CommentsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutUserInput";
import { CommentsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutUserInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  set?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CommentsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CommentsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsScalarWhereInput[] | undefined;
}
