import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyOwnerInput } from "../inputs/CommentCreateManyOwnerInput";

@TypeGraphQL.InputType("CommentCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyOwnerInput], {
    nullable: false
  })
  data!: CommentCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
