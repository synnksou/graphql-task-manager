import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyParentInputEnvelope } from "../inputs/CommentsCreateManyParentInputEnvelope";
import { CommentsCreateOrConnectWithoutParentInput } from "../inputs/CommentsCreateOrConnectWithoutParentInput";
import { CommentsCreateWithoutParentInput } from "../inputs/CommentsCreateWithoutParentInput";
import { CommentsScalarWhereInput } from "../inputs/CommentsScalarWhereInput";
import { CommentsUpdateManyWithWhereWithoutParentInput } from "../inputs/CommentsUpdateManyWithWhereWithoutParentInput";
import { CommentsUpdateWithWhereUniqueWithoutParentInput } from "../inputs/CommentsUpdateWithWhereUniqueWithoutParentInput";
import { CommentsUpsertWithWhereUniqueWithoutParentInput } from "../inputs/CommentsUpsertWithWhereUniqueWithoutParentInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class CommentsUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutParentInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyParentInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentsUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: CommentsUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: CommentsUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsScalarWhereInput[] | undefined;
}
