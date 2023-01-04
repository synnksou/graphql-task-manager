import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyMutationInput } from "../inputs/ActionUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionUpdateManyWithWhereWithoutTaskInput", {
  isAbstract: true
})
export class ActionUpdateManyWithWhereWithoutTaskInput {
  @TypeGraphQL.Field(_type => ActionScalarWhereInput, {
    nullable: false
  })
  where!: ActionScalarWhereInput;

  @TypeGraphQL.Field(_type => ActionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActionUpdateManyMutationInput;
}
