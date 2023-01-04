import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyOwnerInputEnvelope } from "../inputs/CommentCreateManyOwnerInputEnvelope";
import { CommentCreateOrConnectWithoutOwnerInput } from "../inputs/CommentCreateOrConnectWithoutOwnerInput";
import { CommentCreateWithoutOwnerInput } from "../inputs/CommentCreateWithoutOwnerInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: CommentCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
