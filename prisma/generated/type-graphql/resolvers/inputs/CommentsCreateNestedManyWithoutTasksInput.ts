import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyTasksInputEnvelope } from "../inputs/CommentsCreateManyTasksInputEnvelope";
import { CommentsCreateOrConnectWithoutTasksInput } from "../inputs/CommentsCreateOrConnectWithoutTasksInput";
import { CommentsCreateWithoutTasksInput } from "../inputs/CommentsCreateWithoutTasksInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedManyWithoutTasksInput", {
  isAbstract: true
})
export class CommentsCreateNestedManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutTasksInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;
}
