import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateWithoutTaskInput } from "../inputs/ActionCreateWithoutTaskInput";
import { ActionUpdateWithoutTaskInput } from "../inputs/ActionUpdateWithoutTaskInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class ActionUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: ActionUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ActionCreateWithoutTaskInput;
}
