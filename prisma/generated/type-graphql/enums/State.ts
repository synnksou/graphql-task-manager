import * as TypeGraphQL from "type-graphql";

export enum State {
  CREATED = "CREATED",
  PROGRESS = "PROGRESS",
  FINISHED = "FINISHED"
}
TypeGraphQL.registerEnumType(State, {
  name: "State",
  description: undefined,
});
