import * as TypeGraphQL from "type-graphql";

export enum Name {
  ADD = "ADD",
  UPDATE = "UPDATE",
  REMOVE = "REMOVE"
}
TypeGraphQL.registerEnumType(Name, {
  name: "Name",
  description: undefined,
});
