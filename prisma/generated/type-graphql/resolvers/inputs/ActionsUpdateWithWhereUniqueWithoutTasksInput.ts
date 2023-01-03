import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsUpdateWithoutTasksInput } from "../inputs/ActionsUpdateWithoutTasksInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsUpdateWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class ActionsUpdateWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionsUpdateWithoutTasksInput, {
    nullable: false
  })
  data!: ActionsUpdateWithoutTasksInput;
}
