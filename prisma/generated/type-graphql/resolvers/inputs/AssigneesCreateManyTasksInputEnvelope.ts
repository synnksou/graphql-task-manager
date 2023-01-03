import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesCreateManyTasksInput } from "../inputs/AssigneesCreateManyTasksInput";

@TypeGraphQL.InputType("AssigneesCreateManyTasksInputEnvelope", {
  isAbstract: true
})
export class AssigneesCreateManyTasksInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneesCreateManyTasksInput], {
    nullable: false
  })
  data!: AssigneesCreateManyTasksInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
