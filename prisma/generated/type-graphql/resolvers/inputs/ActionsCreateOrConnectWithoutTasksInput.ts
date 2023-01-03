import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateWithoutTasksInput } from "../inputs/ActionsCreateWithoutTasksInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsCreateOrConnectWithoutTasksInput", {
  isAbstract: true
})
export class ActionsCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ActionsCreateWithoutTasksInput;
}
