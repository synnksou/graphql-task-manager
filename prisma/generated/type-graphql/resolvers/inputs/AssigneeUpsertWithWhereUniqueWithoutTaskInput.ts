import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeCreateWithoutTaskInput } from "../inputs/AssigneeCreateWithoutTaskInput";
import { AssigneeUpdateWithoutTaskInput } from "../inputs/AssigneeUpdateWithoutTaskInput";
import { AssigneeWhereUniqueInput } from "../inputs/AssigneeWhereUniqueInput";

@TypeGraphQL.InputType("AssigneeUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true
})
export class AssigneeUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => AssigneeWhereUniqueInput, {
    nullable: false
  })
  where!: AssigneeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AssigneeUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: AssigneeUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => AssigneeCreateWithoutTaskInput, {
    nullable: false
  })
  create!: AssigneeCreateWithoutTaskInput;
}
