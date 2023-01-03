import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsCreateWithoutTasksInput } from "../inputs/ActionsCreateWithoutTasksInput";
import { ActionsUpdateWithoutTasksInput } from "../inputs/ActionsUpdateWithoutTasksInput";
import { ActionsWhereUniqueInput } from "../inputs/ActionsWhereUniqueInput";

@TypeGraphQL.InputType("ActionsUpsertWithWhereUniqueWithoutTasksInput", {
  isAbstract: true
})
export class ActionsUpsertWithWhereUniqueWithoutTasksInput {
  @TypeGraphQL.Field(_type => ActionsWhereUniqueInput, {
    nullable: false
  })
  where!: ActionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionsUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: ActionsUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => ActionsCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ActionsCreateWithoutTasksInput;
}
