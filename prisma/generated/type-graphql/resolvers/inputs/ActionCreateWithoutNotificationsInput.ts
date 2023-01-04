import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutActionsInput } from "../inputs/TaskCreateNestedOneWithoutActionsInput";
import { Name } from "../../enums/Name";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("ActionCreateWithoutNotificationsInput", {
  isAbstract: true
})
export class ActionCreateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name?: "ADD" | "UPDATE" | "REMOVE" | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutActionsInput, {
    nullable: false
  })
  task!: TaskCreateNestedOneWithoutActionsInput;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;
}
