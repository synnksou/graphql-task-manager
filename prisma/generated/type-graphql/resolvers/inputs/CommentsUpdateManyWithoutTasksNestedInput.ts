import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyTasksInputEnvelope } from "../inputs/CommentsCreateManyTasksInputEnvelope";
import { CommentsCreateOrConnectWithoutTasksInput } from "../inputs/CommentsCreateOrConnectWithoutTasksInput";
import { CommentsCreateWithoutTasksInput } from "../inputs/CommentsCreateWithoutTasksInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutTasksInput } from "../inputs/CommentsUpdateManyWithWhereWithoutTasksInput";
import { CommentsUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutTasksInput";
import { CommentsUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutTasksInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithoutTasksNestedInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithoutTasksNestedInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  upsert?: CommentsUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyTasksInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true
  })
  update?: CommentsUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutTasksInput], {
    nullable: true
  })
  updateMany?: CommentsUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsScalarWhereInput[] | undefined;
}
