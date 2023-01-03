import * as TypeGraphQL from "type-graphql";

export enum CommentsScalarFieldEnum {
  id = "id",
  targetType = "targetType",
  parentId = "parentId",
  content = "content",
  ownerId = "ownerId",
  tasksId = "tasksId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommentsScalarFieldEnum, {
  name: "CommentsScalarFieldEnum",
  description: undefined,
});
