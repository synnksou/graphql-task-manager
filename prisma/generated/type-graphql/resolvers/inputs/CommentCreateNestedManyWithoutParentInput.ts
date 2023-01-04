import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyParentInputEnvelope } from "../inputs/CommentCreateManyParentInputEnvelope";
import { CommentCreateOrConnectWithoutParentInput } from "../inputs/CommentCreateOrConnectWithoutParentInput";
import { CommentCreateWithoutParentInput } from "../inputs/CommentCreateWithoutParentInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutParentInput], {
    nullable: true
  })
  create?: CommentCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
