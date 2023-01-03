import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyUserInput } from "../inputs/CommentsCreateManyUserInput";

@TypeGraphQL.InputType("CommentsCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class CommentsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentsCreateManyUserInput], {
    nullable: false
  })
  data!: CommentsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
