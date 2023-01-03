import * as TypeGraphQL from "type-graphql";

export enum TasksScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  date = "date",
  state = "state",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TasksScalarFieldEnum, {
  name: "TasksScalarFieldEnum",
  description: undefined,
});
