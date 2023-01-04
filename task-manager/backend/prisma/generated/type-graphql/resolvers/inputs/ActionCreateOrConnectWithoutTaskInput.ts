import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionCreateWithoutTaskInput } from "../inputs/ActionCreateWithoutTaskInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateOrConnectWithoutTaskInput", {
  isAbstract: true
})
export class ActionCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => ActionWhereUniqueInput, {
    nullable: false
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActionCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ActionCreateWithoutTaskInput;
}
