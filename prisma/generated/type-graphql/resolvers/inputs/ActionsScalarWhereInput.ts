import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumNameNullableFilter } from "../inputs/EnumNameNullableFilter";
import { EnumTargetTypeNullableFilter } from "../inputs/EnumTargetTypeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActionsScalarWhereInput", {
  isAbstract: true
})
export class ActionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActionsScalarWhereInput], {
    nullable: true
  })
  AND?: ActionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarWhereInput], {
    nullable: true
  })
  OR?: ActionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActionsScalarWhereInput], {
    nullable: true
  })
  NOT?: ActionsScalarWhereInput[] | undefined;

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
