import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateWithoutUserInput } from "../inputs/AssigneeUpdateWithoutUserInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class AssigneeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: AssigneeUpdateWithoutUserInput;
}
