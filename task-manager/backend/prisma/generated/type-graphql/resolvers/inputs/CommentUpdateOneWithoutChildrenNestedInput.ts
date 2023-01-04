import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutChildrenInput } from "../inputs/CommentCreateOrConnectWithoutChildrenInput";
import { CommentCreateWithoutChildrenInput } from "../inputs/CommentCreateWithoutChildrenInput";
import { CommentUpdateWithoutChildrenInput } from "../inputs/CommentUpdateWithoutChildrenInput";
import { CommentUpsertWithoutChildrenInput } from "../inputs/CommentUpsertWithoutChildrenInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateOneWithoutChildrenNestedInput", {
  isAbstract: true
})
export class CommentUpdateOneWithoutChildrenNestedInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CommentCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutChildrenInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutChildrenInput, {
    nullable: true
  })
  update?: CommentUpdateWithoutChildrenInput | undefined;
}
