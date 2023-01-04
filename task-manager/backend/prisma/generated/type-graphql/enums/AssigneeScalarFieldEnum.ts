import * as TypeGraphQL from "type-graphql";

export enum AssigneeScalarFieldEnum {
  id = "id",
  taskId = "taskId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(AssigneeScalarFieldEnum, {
  name: "AssigneeScalarFieldEnum",
  description: undefined,
});
