import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutUserInput } from "../inputs/AssigneeCreateWithoutUserInput";
import { AssigneeUpdateWithoutUserInput } from "../inputs/AssigneeUpdateWithoutUserInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class AssigneeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: AssigneeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutUserInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutUserInput;
}
