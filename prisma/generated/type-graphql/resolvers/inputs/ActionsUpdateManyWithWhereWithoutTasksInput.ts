import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActionsScalarWhereInput } from "../inputs/ActionsScalarWhereInput";
import { ActionsUpdateManyMutationInput } from "../inputs/ActionsUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionsUpdateManyWithWhereWithoutTasksInput", {
  isAbstract: true
})
export class ActionsUpdateManyWithWhereWithoutTasksInput {
  @TypeGraphQL.Field(_type => ActionsScalarWhereInput, {
    nullable: false
  })
  where!: ActionsScalarWhereInput;

  @TypeGraphQL.Field(_type => ActionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActionsUpdateManyMutationInput;
}
