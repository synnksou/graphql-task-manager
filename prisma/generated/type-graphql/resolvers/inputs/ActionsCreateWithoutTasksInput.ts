import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationsCreateNestedManyWithoutActionsInput } from "../inputs/NotificationsCreateNestedManyWithoutActionsInput";
import { Name } from "../../enums/Name";
import { TargetType } from "../../enums/TargetType";

@TypeGraphQL.InputType("ActionsCreateWithoutTasksInput", {
  isAbstract: true
})
export class ActionsCreateWithoutTasksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Name, {
    nullable: true
  })
  name?: "ADD" | "UPDATE" | "REMOVE" | undefined;

  @TypeGraphQL.Field(_type => TargetType, {
    nullable: true
  })
  targetType?: "TASK" | undefined;

  @TypeGraphQL.Field(_type => NotificationsCreateNestedManyWithoutActionsInput, {
    nullable: true
  })
  Notifications?: NotificationsCreateNestedManyWithoutActionsInput | undefined;
}
