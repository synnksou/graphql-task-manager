import * as TypeGraphQL from "type-graphql";

export enum ActionScalarFieldEnum {
  id = "id",
  name = "name",
  targetType = "targetType",
  targetId = "targetId"
}
TypeGraphQL.registerEnumType(ActionScalarFieldEnum, {
  name: "ActionScalarFieldEnum",
  description: undefined,
});
