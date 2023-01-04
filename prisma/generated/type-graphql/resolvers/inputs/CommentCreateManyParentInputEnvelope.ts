import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyParentInput } from "../inputs/CommentCreateManyParentInput";

@TypeGraphQL.InputType("CommentCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyParentInput], {
    nullable: false
  })
  data!: CommentCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
