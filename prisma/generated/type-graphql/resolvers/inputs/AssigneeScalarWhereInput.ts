import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AssigneeScalarWhereInput", {
  isAbstract: true
})
export class AssigneeScalarWhereInput {
  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  AND?: AssigneeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  OR?: AssigneeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AssigneeScalarWhereInput], {
    nullable: true
  })
  NOT?: AssigneeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
