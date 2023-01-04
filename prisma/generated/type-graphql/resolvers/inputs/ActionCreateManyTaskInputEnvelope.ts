import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateManyTaskInput } from "../inputs/ActionCreateManyTaskInput";

@TypeGraphQL.InputType("ActionCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class ActionCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [ActionCreateManyTaskInput], {
    nullable: false
  })
  data!: ActionCreateManyTaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
