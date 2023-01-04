import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutUserInput } from "../inputs/AssigneeCreateWithoutUserInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class AssigneeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutUserInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutUserInput;
}
