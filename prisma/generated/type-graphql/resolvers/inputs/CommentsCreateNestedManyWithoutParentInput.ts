import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyParentInputEnvelope } from "../inputs/CommentsCreateManyParentInputEnvelope";
import { CommentsCreateOrConnectWithoutParentInput } from "../inputs/CommentsCreateOrConnectWithoutParentInput";
import { CommentsCreateWithoutParentInput } from "../inputs/CommentsCreateWithoutParentInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class CommentsCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutParentInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;
}
