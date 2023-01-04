import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyParentInputEnvelope } from "../inputs/CommentCreateManyParentInputEnvelope";
import { CommentCreateOrConnectWithoutParentInput } from "../inputs/CommentCreateOrConnectWithoutParentInput";
import { CommentCreateWithoutParentInput } from "../inputs/CommentCreateWithoutParentInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutParentInput } from "../inputs/CommentUpdateManyWithWhereWithoutParentInput";
import { CommentUpdateWithWhereUniqueWithoutParentInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutParentInput";
import { CommentUpsertWithWhereUniqueWithoutParentInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutParentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutParentInput], {
    nullable: true
  })
  create?: CommentCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
