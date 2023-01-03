import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateManyTasksInput } from "../inputs/ActionsCreateManyTasksInput";

@TypeGraphQL.InputType("ActionsCreateManyTasksInputEnvelope", {
  isAbstract: true
})
export class ActionsCreateManyTasksInputEnvelope {
  @TypeGraphQL.Field(_type => [ActionsCreateManyTasksInput], {
    nullable: false
  })
  data!: ActionsCreateManyTasksInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
