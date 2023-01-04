import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyOwnerInputEnvelope } from "../inputs/CommentCreateManyOwnerInputEnvelope";
import { CommentCreateOrConnectWithoutOwnerInput } from "../inputs/CommentCreateOrConnectWithoutOwnerInput";
import { CommentCreateWithoutOwnerInput } from "../inputs/CommentCreateWithoutOwnerInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutOwnerInput } from "../inputs/CommentUpdateManyWithWhereWithoutOwnerInput";
import { CommentUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutOwnerInput";
import { CommentUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutOwnerInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutOwnerNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CommentCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyOwnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
