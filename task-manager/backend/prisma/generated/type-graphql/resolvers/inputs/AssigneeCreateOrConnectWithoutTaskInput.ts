import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutTaskInput } from "../inputs/AssigneeCreateWithoutTaskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutTaskInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutTaskInput;
}
