import * as TypeGraphQL from "type-graphql";

export enum TargetType {
  TASK = "TASK"
}
TypeGraphQL.registerEnumType(TargetType, {
  name: "TargetType",
  description: undefined,
});
