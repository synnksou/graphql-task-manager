import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyUserInput } from "../inputs/AssigneeCreateManyUserInput";

@TypeGraphQL.InputType("AssigneeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class AssigneeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneeCreateManyUserInput], {
    nullable: false
  })
  data!: AssigneeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
