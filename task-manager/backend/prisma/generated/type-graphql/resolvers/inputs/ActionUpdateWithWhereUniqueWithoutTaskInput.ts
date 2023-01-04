import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionUpdateWithoutTaskInput } from "../inputs/ActionUpdateWithoutTaskInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class ActionUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: ActionUpdateWithoutTaskInput;
}
