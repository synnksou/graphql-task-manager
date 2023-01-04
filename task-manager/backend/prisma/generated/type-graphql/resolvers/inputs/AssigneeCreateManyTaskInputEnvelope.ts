import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateManyTaskInput } from "../inputs/AssigneeCreateManyTaskInput";

@TypeGraphQL.InputType("AssigneeCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class AssigneeCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [AssigneeCreateManyTaskInput], {
    nullable: false
  })
  data!: AssigneeCreateManyTaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
