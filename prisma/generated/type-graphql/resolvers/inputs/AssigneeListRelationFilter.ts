import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneeWhereInput } from "../inputs/AssigneeWhereInput";

@TypeGraphQL.InputType("AssigneeListRelationFilter", {
  isAbstract: true
})
export class AssigneeListRelationFilter {
  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  every?: AssigneeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  some?: AssigneeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssigneeWhereInput, {
    nullable: true
  })
  none?: AssigneeWhereInput | undefined;
}
