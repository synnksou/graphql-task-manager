import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AssigneeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AssigneeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AssigneeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AssigneeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AssigneeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AssigneeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  taskId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
