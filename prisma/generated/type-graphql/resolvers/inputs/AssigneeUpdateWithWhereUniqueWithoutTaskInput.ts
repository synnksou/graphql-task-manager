import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeUpdateWithoutTaskInput } from "../inputs/AssigneeUpdateWithoutTaskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: AssigneeUpdateWithoutTaskInput;
}
