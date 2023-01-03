import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyTasksInput } from "../inputs/CommentsCreateManyTasksInput";

@TypeGraphQL.InputType("CommentsCreateManyTasksInputEnvelope", {
  isAbstract: true
})
export class CommentsCreateManyTasksInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentsCreateManyTasksInput], {
    nullable: false
  })
  data!: CommentsCreateManyTasksInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
