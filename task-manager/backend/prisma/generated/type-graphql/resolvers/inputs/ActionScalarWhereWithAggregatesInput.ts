import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumNameNullableWithAggregatesFilter } from "../inputs/EnumNameNullableWithAggregatesFilter";
import { EnumTargetTypeNullableWithAggregatesFilter } from "../inputs/EnumTargetTypeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumNameNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumNameNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableWithAggregatesFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  targetId?: StringWithAggregatesFilter | undefined;
}
