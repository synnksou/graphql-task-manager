import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutChildrenInput } from "../inputs/CommentsCreateOrConnectWithoutChildrenInput";
import { CommentsCreateWithoutChildrenInput } from "../inputs/CommentsCreateWithoutChildrenInput";
import { CommentsUpdateWithoutChildrenInput } from "../inputs/CommentsUpdateWithoutChildrenInput";
import { CommentsUpsertWithoutChildrenInput } from "../inputs/CommentsUpsertWithoutChildrenInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateOneWithoutChildrenNestedInput", {
  isAbstract: true
})
export class CommentsUpdateOneWithoutChildrenNestedInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpsertWithoutChildrenInput, {
    nullable: true
  })
  upsert?: CommentsUpsertWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutChildrenInput, {
    nullable: true
  })
  update?: CommentsUpdateWithoutChildrenInput | undefined;
}
