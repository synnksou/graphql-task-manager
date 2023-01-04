import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumNameNullableFilter } from "../inputs/EnumNameNullableFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionScalarWhereInput", {
  isAbstract: true
})
export class ActionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  AND?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  OR?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionScalarWhereInput], {
    nullable: true
  })
  NOT?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumNameNullableFilter, {
    nullable: true
  })
  name?: EnumNameNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTargetTypeNullableFilter, {
    nullable: true
  })
  targetType?: EnumTargetTypeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  targetId?: StringFilter | undefined;
}
