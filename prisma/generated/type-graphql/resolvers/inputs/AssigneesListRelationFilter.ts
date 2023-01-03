import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AssigneesWhereInput } from "../inputs/AssigneesWhereInput";

@TypeGraphQL.InputType("AssigneesListRelationFilter", {
  isAbstract: true
})
export class AssigneesListRelationFilter {
  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  every?: AssigneesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  some?: AssigneesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AssigneesWhereInput, {
    nullable: true
  })
  none?: AssigneesWhereInput | undefined;
}
