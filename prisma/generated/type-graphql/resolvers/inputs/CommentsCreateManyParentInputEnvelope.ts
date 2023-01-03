import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyParentInput } from "../inputs/CommentsCreateManyParentInput";

@TypeGraphQL.InputType("CommentsCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class CommentsCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentsCreateManyParentInput], {
    nullable: false
  })
  data!: CommentsCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
