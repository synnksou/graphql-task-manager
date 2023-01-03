import * as TypeGraphQL from "type-graphql";

export enum ActionsScalarFieldEnum {
  id = "id",
  name = "name",
  targetType = "targetType",
  targetId = "targetId"
}
TypeGraphQL.registerEnumType(ActionsScalarFieldEnum, {
  name: "ActionsScalarFieldEnum",
  description: undefined,
});
