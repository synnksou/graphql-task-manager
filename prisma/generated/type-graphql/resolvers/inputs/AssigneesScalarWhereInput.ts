import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AssigneesScalarWhereInput", {
  isAbstract: true
})
export class AssigneesScalarWhereInput {
  @TypeGraphQL.Field(_type => [AssigneesScalarWhereInput], {
    nullable: true
  })
  AND?: AssigneesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereInput], {
    nullable: true
  })
  OR?: AssigneesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneesScalarWhereInput], {
    nullable: true
  })
  NOT?: AssigneesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tasksId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
